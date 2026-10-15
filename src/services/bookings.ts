import { supabase, BookingRow } from "@/lib/supabase";

export interface BookingFilters {
  search?: string;
  status?: string;
  vehicleType?: string;
  movingDate?: string;
  page?: number;
  pageSize?: number;
}

export interface BookingsResponse {
  bookings: BookingRow[];
  totalCount: number;
  error: string | null;
}

/**
 * Fetch bookings with optional search, filtering, and pagination from Supabase
 */
export async function getBookings({
  search = "",
  status = "ALL",
  vehicleType = "ALL",
  movingDate = "",
  page = 1,
  pageSize = 10,
}: BookingFilters = {}): Promise<BookingsResponse> {
  try {
    let query = supabase
      .from("bookings")
      .select("*", { count: "exact" });

    // Status filter
    if (status && status !== "ALL") {
      query = query.eq("status", status);
    }

    // Vehicle/Service Type filter
    if (vehicleType && vehicleType !== "ALL") {
      query = query.eq("vehicle_type", vehicleType);
    }

    // Moving date filter
    if (movingDate) {
      query = query.ilike("moving_date", `%${movingDate}%`);
    }

    // Search filter across Order ID, Phone, Pickup, Drop
    if (search.trim()) {
      const s = search.trim();
      query = query.or(
        `gw_booking_id.ilike.%${s}%,main_phone.ilike.%${s}%,pickup_address.ilike.%${s}%,drop_address.ilike.%${s}%`
      );
    }

    // Order by newest first
    query = query.order("created_at", { ascending: false });

    // Range Pagination
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;
    query = query.range(from, to);

    const { data, count, error } = await query;

    if (error) {
      console.error("Error fetching bookings from Supabase:", error);
      return { bookings: [], totalCount: 0, error: error.message };
    }

    return {
      bookings: (data as BookingRow[]) || [],
      totalCount: count || 0,
      error: null,
    };
  } catch (err: any) {
    console.error("Unexpected error in getBookings:", err);
    return { bookings: [], totalCount: 0, error: err.message || "Failed to fetch bookings" };
  }
}

/**
 * Get a single booking by its gw_booking_id
 */
export async function getBookingById(gw_booking_id: string): Promise<{ booking: BookingRow | null; error: string | null }> {
  try {
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .eq("gw_booking_id", gw_booking_id)
      .single();

    if (error) {
      console.error(`Error fetching booking ${gw_booking_id}:`, error);
      return { booking: null, error: error.message };
    }

    return { booking: data as BookingRow, error: null };
  } catch (err: any) {
    return { booking: null, error: err.message || "Failed to fetch booking details" };
  }
}

/**
 * Update status of an existing booking in Supabase
 */
export async function updateBookingStatus(
  gw_booking_id: string,
  newStatus: string
): Promise<{ success: boolean; data: BookingRow | null; error: string | null }> {
  try {
    const { data, error } = await supabase
      .from("bookings")
      .update({ status: newStatus })
      .eq("gw_booking_id", gw_booking_id)
      .select()
      .single();

    if (error) {
      console.error(`Error updating booking status for ${gw_booking_id}:`, error);
      return { success: false, data: null, error: error.message };
    }

    return { success: true, data: data as BookingRow, error: null };
  } catch (err: any) {
    return { success: false, data: null, error: err.message || "Failed to update booking status" };
  }
}

/**
 * Fetch real dashboard statistics directly from Supabase
 */
export async function getBookingStats() {
  try {
    const { data, error } = await supabase
      .from("bookings")
      .select("status, price_estimate, main_phone");

    if (error) {
      console.error("Error fetching stats:", error);
      return {
        totalBookings: 0,
        pendingBookings: 0,
        confirmedBookings: 0,
        inTransitBookings: 0,
        deliveredBookings: 0,
        cancelledBookings: 0,
        totalRevenue: 0,
        uniqueUsersCount: 0,
        error: error.message,
      };
    }

    const bookings = data || [];
    const totalBookings = bookings.length;
    let pendingBookings = 0;
    let confirmedBookings = 0;
    let inTransitBookings = 0;
    let deliveredBookings = 0;
    let cancelledBookings = 0;
    let totalRevenue = 0;
    const phoneSet = new Set<string>();

    for (const b of bookings) {
      const st = (b.status || "").toLowerCase();
      if (st.includes("booked") || st.includes("initiated") || st.includes("pending")) {
        pendingBookings++;
      } else if (st.includes("confirmed")) {
        confirmedBookings++;
      } else if (st.includes("transit")) {
        inTransitBookings++;
      } else if (st.includes("delivered") || st.includes("completed")) {
        deliveredBookings++;
      } else if (st.includes("cancel")) {
        cancelledBookings++;
      } else {
        pendingBookings++;
      }

      if (b.price_estimate && typeof b.price_estimate === "number") {
        totalRevenue += b.price_estimate;
      }
      if (b.main_phone) {
        phoneSet.add(b.main_phone);
      }
    }

    return {
      totalBookings,
      pendingBookings,
      confirmedBookings,
      inTransitBookings,
      deliveredBookings,
      cancelledBookings,
      totalRevenue,
      uniqueUsersCount: phoneSet.size,
      error: null,
    };
  } catch (err: any) {
    console.error("Unexpected error in getBookingStats:", err);
    return {
      totalBookings: 0,
      pendingBookings: 0,
      confirmedBookings: 0,
      inTransitBookings: 0,
      deliveredBookings: 0,
      cancelledBookings: 0,
      totalRevenue: 0,
      uniqueUsersCount: 0,
      error: err.message,
    };
  }
}

/**
 * Subscribe to realtime updates on bookings table
 */
export function subscribeToBookings(
  onInsert?: (booking: BookingRow) => void,
  onUpdate?: (booking: BookingRow) => void
) {
  const channelName = `realtime-bookings-${Date.now()}`;
  const channel = supabase
    .channel(channelName)
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "bookings" },
      (payload) => {
        if (onInsert && payload.new) {
          onInsert(payload.new as BookingRow);
        }
      }
    )
    .on(
      "postgres_changes",
      { event: "UPDATE", schema: "public", table: "bookings" },
      (payload) => {
        if (onUpdate && payload.new) {
          onUpdate(payload.new as BookingRow);
        }
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}
