require("dotenv").config();

const { createClient } =
    require("@supabase/supabase-js");

const supabaseUrl =
    process.env.SUPABASE_URL;

const supabaseKey =
    process.env.SUPABASE_ANON_KEY;

console.log(
    "SUPABASE_URL loaded:",
    supabaseUrl ? "YES" : "NO"
);

console.log(
    "SUPABASE_ANON_KEY loaded:",
    supabaseKey ? "YES" : "NO"
);

if (!supabaseUrl || !supabaseKey) {

    throw new Error(
        "Faltan variables SUPABASE_URL o SUPABASE_ANON_KEY"
    );

}

const supabase =
    createClient(
        supabaseUrl,
        supabaseKey
    );

module.exports =
    supabase;