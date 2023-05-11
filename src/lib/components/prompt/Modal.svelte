<script lang='ts'>
	export let showModal:boolean;
	let dialog:any;
	import {X} from 'lucide-svelte'


	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
	class="card variant-filled rounded-lg p-4"
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<div on:click|stopPropagation>
		<div class="flex justify-end">
			<!-- svelte-ignore a11y-autofocus -->
			<button class="btn-icon variant-filled" autofocus on:click={() => dialog.close()}><X /></button>
		</div>
		<slot name="header" />
		<br>
		<slot />

		<br>
		<br>
		
	</div>
</dialog>



<style>

	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
