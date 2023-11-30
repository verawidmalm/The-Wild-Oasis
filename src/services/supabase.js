import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ttqctizbqfasirzqejbo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0cWN0aXpicWZhc2lyenFlamJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxNTQwMjcsImV4cCI6MjAxNTczMDAyN30.XIbJInTA9R31_NEfXuaGbFIn2ALHsoStMBCfR6Z95uQ";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
