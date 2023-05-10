<script lang='ts'>
    import {page} from '$app/stores';
    $: ({supabase, session, wallet} = $page.data)

    import AuthForm from '$lib/components/auth/AuthForm.svelte';
    import PaymentPrompt from '$lib/components/payment/PaymentPrompt.svelte';
    import Modal from '$lib/components/prompt/Modal.svelte';

    let showModal1:boolean = false;
    let showModal2:boolean = false;
   
</script>


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
        {#if $wallet?.credits<4 && !$wallet?.auto_pay}
        <h3>
            You only have {$wallet?.credits} credits. Please turn on auto-pay or add more credits.
            <button class="btn variant-filled" type="button" on:click={() => (showModal2 = true)}>
                Plans
            </button>
        </h3>
            <Modal bind:showModal={showModal2}>
                <PaymentPrompt />
            </Modal>
        {:else}
        <h3>
            You have {$wallet?.credits} credits
        </h3>
        {/if}
    {/if}
</div>

