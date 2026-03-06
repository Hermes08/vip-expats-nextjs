import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Log configuration status (avoiding leaking keys)
if (typeof window !== 'undefined') {
    if (!supabaseUrl || !supabaseKey || supabaseUrl.includes('tu-proyecto')) {
        console.warn("🌐 Supabase: Not configured or using default URL. Falling back to local/static data.");
    } else {
        console.log("🌐 Supabase: Connection initialized.");
    }
}

export const supabase = createClient(
    supabaseUrl || 'https://placeholder.supabase.co',
    supabaseKey || 'placeholder'
);
