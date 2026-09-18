import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = '';
const SUPABASE_KEY = '';

// Supabase connection will be enabled after project credentials are added.
export const supabase = SUPABASE_URL && SUPABASE_KEY
 ? createClient(SUPABASE_URL, SUPABASE_KEY)
 : null;

console.log('Khalaj Amani Carpets website initialized');