import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://eblklqrbyhdmyruumqsp.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVibGtscXJieWhkbXlydXVtcXNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwNTQ5MzIsImV4cCI6MjA5NjYzMDkzMn0.8jso6k0no8xwIataTxjemSN_4Ww_VTSnstP2Bv5X69A';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
