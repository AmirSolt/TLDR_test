import { invalidate } from '$app/navigation';
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';
import {PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY} from '$env/static/public';
import {readable} from 'svelte/store'



export const load = async ({ fetch, data, depends }) => {
    depends('supabase:auth');

    const supabase = createSupabaseLoadClient({
        supabaseUrl: PUBLIC_SUPABASE_URL,
        supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
        event: { fetch },
        serverSession: data.session
    });
    // ===============================

    const {
        data: { session }
    } = await supabase.auth.getSession();
    // ===============================
    // ===============================
    let wallet;
    if(session?.user?.id)
        await supabase.from('wallets')
        .select()
        .eq('id', session?.user.id)
        .single()
        .then(({data}) => {
            wallet = readable(data)
        })
    // ===============================


    return { 
        supabase,
        session,
        wallet
    };
};