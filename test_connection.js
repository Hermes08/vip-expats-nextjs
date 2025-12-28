
const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

async function testConnection() {
    try {
        const envPath = path.resolve(process.cwd(), '.env.local');
        if (!fs.existsSync(envPath)) {
            console.error("❌ .env.local file not found!");
            return;
        }

        const envContent = fs.readFileSync(envPath, 'utf8');
        const envVars = {};
        envContent.split('\n').forEach(line => {
            const parts = line.split('=');
            if (parts.length >= 2) {
                const key = parts[0].trim();
                const value = parts.slice(1).join('=').trim().replace(/^["']|["']$/g, ''); // Remove quotes if present
                envVars[key] = value;
            }
        });

        const url = envVars.NEXT_PUBLIC_SUPABASE_URL;
        const key = envVars.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        if (!url || !key) {
            console.error("❌ NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY missing in .env.local");
            return;
        }

        if (url.includes('tu-proyecto')) {
            console.error("❌ Supabase URL seems to be the default placeholder.");
            return;
        }

        console.log("Connecting to Supabase at:", url);
        const supabase = createClient(url, key);

        // Test 1: Simple Select
        console.log("Testing connection and 'projects' table...");
        const { data, error, count } = await supabase.from('projects').select('*', { count: 'exact', head: true });

        if (error) {
            console.error("❌ Connection Failed or Table Missing:", error.message);
            if (error.code === '42P01') { // undefined_table
                console.error("\n⚠️  The 'projects' table does not exist. Please run the 'projects_schema.sql' script in your Supabase SQL Editor.");
            }
        } else {
            console.log("✅ Connection Successful!");
            console.log(`✅ 'projects' table exists. Current row count: ${count}`);
        }

    } catch (err) {
        console.error("Unexpected error:", err);
    }
}

testConnection();
