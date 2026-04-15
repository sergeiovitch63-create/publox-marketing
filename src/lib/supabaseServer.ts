import 'server-only';

import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

let cachedClient: SupabaseClient | null = null;

export function getSupabaseServerClient(): SupabaseClient | null {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        'Supabase server client is not configured. Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your environment.'
      );
    }
    return null;
  }

  if (!cachedClient) {
    cachedClient = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: {
        persistSession: false,
      },
    });
  }

  return cachedClient;
}



