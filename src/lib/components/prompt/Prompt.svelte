<script lang='ts'>
    import {page} from '$app/stores';
    $: ({supabase, session, wallet} = $page.data)

    import Modal from '$lib/components/prompt/Modal.svelte';
    import AuthForm from '$lib/components/auth/AuthForm.svelte';
    import PaymentPrompt from '$lib/components/payment/PaymentPrompt.svelte';
    import Chat from '$lib/components/chat/Chat.svelte';

    import {compareList} from '$lib/components/products/compareList';

    export let showPrompt: boolean = false;    

</script>


<Modal bind:showModal={showPrompt}>
    <h2>
       ASIN: {$compareList}
    </h2>

    {#if !session?.user}
            <AuthForm />
    {:else if ($wallet?.credits<1)}
        <PaymentPrompt />
    {:else}
        <Chat />
    {/if}
</Modal>

