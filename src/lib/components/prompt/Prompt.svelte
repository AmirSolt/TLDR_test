<script lang='ts'>
    import {page} from '$app/stores';
    $: ({supabase, session, wallet} = $page.data)

    import Modal from '$lib/components/prompt/Modal.svelte';
    import AuthForm from '$lib/components/auth/AuthForm.svelte';
    import PaymentPrompt from '$lib/components/payment/PaymentPrompt.svelte';
    import Chat from '$lib/components/chat/Chat.svelte';

    

</script>



<h3>
    AuthForm || User email: {session?.user?.email}
</h3>

<!-- <Modal> -->
    {#if !session?.user}
            <AuthForm />
    {:else if ($wallet?.credits<1)}
        <PaymentPrompt />
    {:else}
        <Chat />
    {/if}
<!-- </Modal> -->
