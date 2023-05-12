<script lang="ts">
	import { page } from '$app/stores';
	import { wallet } from '$lib/data/stores';
	$: ({ supabase, session } = $page.data);

	import AuthForm from '$lib/components/auth/AuthForm.svelte';
	import PaymentPrompt from '$lib/components/payment/PaymentPrompt.svelte';
	import Modal from '$lib/components/prompt/Modal.svelte';

	let showModal1: boolean = false;
	let showModal2: boolean = false;
</script>

{#if !session?.user}
	<div class="card p-4 variant-soft-primary">
		<h3>
			You are not logged in
			<button class="btn variant-filled" type="button" on:click={() => (showModal1 = true)}>
				Register/Login
			</button>
		</h3>

		<Modal bind:showModal={showModal1}>
			<AuthForm />
		</Modal>
	</div>
{:else if $wallet?.plan === 'FREE'}
	<div class="card p-4 variant-soft-primary">
		<h3>
			Please subscribe to use the chat
			<button class="btn variant-filled" type="button" on:click={() => (showModal2 = true)}>
				PRO
			</button>
		</h3>
		<Modal bind:showModal={showModal2}>
			<PaymentPrompt />
		</Modal>
	</div>
{:else if $wallet?.credit < 1}
	<div class="card p-4 variant-soft-primary">
		<h3>
            You have used up all your credit for this month.
        </h3>
	</div>
{/if}
