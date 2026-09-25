import { SupabaseClient } from '@supabase/supabase-js';

// Supabase disabled in favor of local server-side storage
export const getSupabase = (): SupabaseClient | null => {
  return null;
};

export const supabase = null;
