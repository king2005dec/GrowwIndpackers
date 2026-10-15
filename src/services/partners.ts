import { supabase, PartnerApplicationRow } from "@/lib/supabase";

export interface PartnerFilters {
  search?: string;
  status?: string;
}

export async function getPartnerApplications({ search = "", status = "ALL" }: PartnerFilters = {}) {
  try {
    let query = supabase.from("partner_applications").select("*");

    if (status && status !== "ALL") {
      query = query.eq("status", status);
    }

    if (search.trim()) {
      const s = search.trim();
      query = query.or(
        `business_name.ilike.%${s}%,full_name.ilike.%${s}%,phone.ilike.%${s}%,email.ilike.%${s}%`
      );
    }

    query = query.order("created_at", { ascending: false });

    const { data, error } = await query;

    if (error) {
      // If table doesn't exist yet, handle gracefully (return empty list, no mock data)
      if (error.code === "PGRST205" || error.message.includes("does not exist") || error.message.includes("schema cache")) {
        console.warn("partner_applications table not found in Supabase schema cache.");
        return { partners: [], count: 0, error: null };
      }
      console.error("Error fetching partner applications:", error);
      return { partners: [], count: 0, error: error.message };
    }

    const partners = (data as PartnerApplicationRow[]) || [];
    return { partners, count: partners.length, error: null };
  } catch (err: any) {
    return { partners: [], count: 0, error: err.message || "Failed to fetch partner applications" };
  }
}

export async function updatePartnerApplicationStatus(id: string, newStatus: string) {
  try {
    const { data, error } = await supabase
      .from("partner_applications")
      .update({ status: newStatus })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error(`Error updating partner application ${id}:`, error);
      return { success: false, data: null, error: error.message };
    }

    return { success: true, data: data as PartnerApplicationRow, error: null };
  } catch (err: any) {
    return { success: false, data: null, error: err.message || "Failed to update partner application" };
  }
}
