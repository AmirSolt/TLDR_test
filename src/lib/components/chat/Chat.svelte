

<script lang="ts">
	import ChatMessage from './ChatMessage.svelte'
	import type { ChatCompletionRequestMessage } from 'openai'

	let query: string = ''
	let answer: string = ''
	let loading: boolean = false
	let chatMessages: ChatCompletionRequestMessage[] = []
	let scrollToDiv: HTMLDivElement

	


	
</script>

<div class="flex flex-col pt-4 w-full px-8 items-center gap-2">
	<div>
		<h1 class="text-2xl font-bold w-full text-center">Chat</h1>
		<p class="text-sm italic">Powered by gpt-3.5-turbo</p>
	</div>
	<div class="h-[500px] w-full bg-gray-900 rounded-md p-4 overflow-y-auto flex flex-col gap-4">
		<div class="flex flex-col gap-2">
			<ChatMessage type="assistant" message="Hello, ask me anything you want!" />
			{#each chatMessages as message}
				<ChatMessage type={message.role} message={message.content} />
			{/each}
			{#if answer}
				<ChatMessage type="assistant" message={answer} />
			{/if}
			{#if loading}
				<ChatMessage type="assistant" message="Loading.." />
			{/if}
		</div>
		<div class="" bind:this={scrollToDiv} />
	</div>
	<form
		class="flex w-full rounded-md gap-4 bg-gray-900 p-4"
		on:submit|preventDefault={() => handleSubmit()}
	>
		<!-- <input type="text" class="input input-bordered w-full" bind:value={query} />
		<button type="submit" class="btn btn-accent"> Send </button>
		 -->
		<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token">
			<textarea
				bind:value={query}
				class="bg-transparent border-0 ring-0"
				name="prompt"
				id="prompt"
				placeholder="Write a message..."
				rows="1"
			/>
			<button class="variant-filled-primary">Send</button>
		</div>
					
	</form>
</div>