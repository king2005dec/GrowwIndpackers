import { createClient } from "@supabase/supabase-js";

// Read Supabase credentials from environment variables
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  (typeof process !== "undefined" ? process.env.VITE_SUPABASE_URL : "") ||
  "https://jugggbaqtsqpxzlvmefz.supabase.co";

const supabasePublishableKey =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  (typeof process !== "undefined" ? process.env.VITE_SUPABASE_PUBLISHABLE_KEY : "") ||
  "sb_publishable_oGOOplqJBpTrZI72CFRZ0w_vD8xlDsW";

if (!supabaseUrl || !supabasePublishableKey) {
  console.warn("Supabase credentials missing! Please set VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY in .env");
}

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

export type BookingRow = {
  gw_booking_id: string;
  user_id: string | null;
  pickup_address: string;
  drop_address: string;
  house_size: string;
  moving_date: string;
  moving_time: string;
  floor: number;
  lift_available: boolean;
  inventory_items: string;
  vehicle_type: string;
  packing_service: string;
  insurance_applied: boolean;
  price_estimate: number;
  status: string;
  main_phone: string;
  alt_phone: string;
  box_dimensions: string;
  timestamp: number;
  created_at: string;
};

export type PartnerApplicationRow = {
  id: string;
  business_name?: string;
  full_name?: string;
  phone?: string;
  email?: string;
  partner_type?: string;
  aadhaar?: string;
  pan?: string;
  vehicle_details?: string;
  experience?: string;
  status?: string;
  created_at?: string;
};
