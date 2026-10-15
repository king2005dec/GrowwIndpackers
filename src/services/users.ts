import { supabase, BookingRow } from "@/lib/supabase";

export interface UserSummary {
  id: string;
  phone: string;
  name: string;
  email: string;
  totalBookings: number;
  totalSpent: number;
  latestMovingDate: string;
  lastBookingCreatedAt: string;
  status: string;
  loyaltyPoints: number;
  membershipTier: string;
}

/**
 * Get aggregated users list based on real Supabase data
 */
export async function getUsers({ search = "" }: { search?: string } = {}) {
  try {
    // 1. Fetch bookings to derive customer profiles
    const { data: bookingsData, error } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching users from bookings:", error);
      return { users: [], error: error.message };
    }

    const bookings = (bookingsData as BookingRow[]) || [];
    const userMap = new Map<string, UserSummary>();

    for (const b of bookings) {
      const phone = b.main_phone || b.alt_phone || "No Phone";
      const key = phone.replace(/\D/g, "") || b.user_id || "unknown";

      if (!userMap.has(key)) {
        userMap.set(key, {
          id: key,
          phone: phone,
          name: `Customer (${phone.slice(-4)})`,
          email: `${phone.replace(/\D/g, "")}@growwind.app`,
          totalBookings: 0,
          totalSpent: 0,
          latestMovingDate: b.moving_date || "-",
          lastBookingCreatedAt: b.created_at,
          status: "Active",
          loyaltyPoints: 0,
          membershipTier: "Standard",
        });
      }

      const user = userMap.get(key)!;
      user.totalBookings += 1;
      user.totalSpent += b.price_estimate || 0;
      user.loyaltyPoints += Math.floor((b.price_estimate || 0) / 100);

      if (user.totalSpent > 20000) {
        user.membershipTier = "Gold";
      } else if (user.totalSpent > 10000) {
        user.membershipTier = "Silver";
      }
    }

    let users = Array.from(userMap.values());

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      users = users.filter(
        (u) =>
          u.phone.toLowerCase().includes(q) ||
          u.name.toLowerCase().includes(q) ||
          u.email.toLowerCase().includes(q)
      );
    }

    return { users, error: null };
  } catch (err: any) {
    return { users: [], error: err.message || "Failed to fetch users" };
  }
}

/**
 * Get all bookings for a specific user phone or user_id
 */
export async function getUserBookings(phone: string) {
  try {
    const cleanPhone = phone.replace(/\D/g, "");
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .or(`main_phone.ilike.%${cleanPhone}%,alt_phone.ilike.%${cleanPhone}%`)
      .order("created_at", { ascending: false });

    if (error) {
      return { bookings: [], error: error.message };
    }

    return { bookings: (data as BookingRow[]) || [], error: null };
  } catch (err: any) {
    return { bookings: [], error: err.message || "Failed to fetch user bookings" };
  }
}
