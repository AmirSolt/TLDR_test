<script lang='ts'>
    import {page} from '$app/stores';
    $: ({supabase, session, wallet} = $page.data)

    import AuthForm from '$lib/components/auth/AuthForm.svelte';
    import PaymentPrompt from '$lib/components/payment/PaymentPrompt.svelte';
    import Chat from '$lib/components/chat/Chat.svelte';

</script>

{#if !session?.user}
    <h3>
        Please sign-up/login
    </h3>
    
{:else if !($wallet?.credits<1)}
    <h3>
        You have {wallet?.credits} credits
    </h3>
{:else}
    <Chat />
{/if}
