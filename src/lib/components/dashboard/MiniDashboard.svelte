<script lang='ts'>
    import {page} from '$app/stores';
    $: ({supabase, session, wallet} = $page.data)

    import AuthForm from '$lib/components/auth/AuthForm.svelte';
    import PaymentPrompt from '$lib/components/payment/PaymentPrompt.svelte';
    import Modal from '$lib/components/prompt/Modal.svelte';

    let showModal1:boolean = false;
    let showModal2:boolean = false;
   
</script>


{#if session?.user && wallet?.is_subscribed}

<div></div>

{:else}
<div class="card p-4 variant-soft-primary">

    {#if !session?.user}
        <h3>
            You are not logged in
            <button class="btn variant-filled" type="button" on:click={() => (showModal1 = true)}>
                Register/Login
            </button>
        </h3>

        <Modal bind:showModal={showModal1}>
            <AuthForm />
        </Modal>

    {:else}
        {#if !$wallet?.is_subscribed}
        <h3>
            Please subscribe to use the chat
            <button class="btn variant-filled" type="button" on:click={() => (showModal2 = true)}>
                PRO
            </button>
        </h3>
            <Modal bind:showModal={showModal2}>
                <PaymentPrompt />
            </Modal>
        {:else}
        <!-- <h3>
            You are subscribed
        </h3> -->
        {/if}
    {/if}
</div>

{/if}