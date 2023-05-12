<script lang="ts">
    import {page} from '$app/stores';
    import {logout} from './authFuncs';

    $: ({supabase, session} = $page.data)


        async function logoutForm(e) {
            const response = await logout(supabase)
        }
</script>

{#if session}
    <form on:submit|preventDefault={logoutForm}>
        <button class="btn variant-filled" type="submit">Logout</button>
    </form>
{/if}