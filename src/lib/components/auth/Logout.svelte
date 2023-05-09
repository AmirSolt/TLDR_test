<script lang="ts">
    import { redirect } from "@sveltejs/kit"
    import {page} from '$app/stores';
    import {logout} from './authFuncs';

    $: ({supabase, session} = $page.data)


        async function logoutForm(e) {
        const form = e.target
        const data = new FormData(form)
        const response = await logout(supabase)
        if(!response.error)
            redirect(303, "/")
    }
</script>

{#if session}
    <form on:submit|preventDefault={logoutForm}>
        <button class="btn variant-filled" type="submit">Logout</button>
    </form>
{/if}