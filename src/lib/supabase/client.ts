import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || false;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || false;

if (typeof supabaseUrl === "boolean" || typeof supabaseAnonKey === "boolean") {
	throw new Error("No Supabase credentials supplied.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
