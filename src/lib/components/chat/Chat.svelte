

<script lang="ts">
	import ChatMessage from './ChatMessage.svelte'
	import type { ChatCompletionRequestMessage } from 'openai'
	import {handleSubmit} from './chatHelper'
	
	class ChatArgs  {
		query:string = ''
		answer:string= ''
		loading:boolean= false
		chatMessages:ChatCompletionRequestMessage[] = []
	}
	let scrollToDiv:HTMLDivElement
	
	let chatArgs = new ChatArgs()

	
</script>

<div class="">
	


	<div class="">
		<div class="">
			<ChatMessage type="assistant" message="Hello, ask me anything you want!" />
			{#each chatArgs.chatMessages as message}
				<ChatMessage type={message.role} message={message.content} />
			{/each}
			{#if chatArgs.answer}
				<ChatMessage type="assistant" message={chatArgs.answer} />
			{/if}
			{#if chatArgs.loading}
				<ChatMessage type="assistant" message="Loading.." />
			{/if}
		</div>
		<div class="" bind:this={scrollToDiv} />
	</div>


	<form
		class="flex w-full rounded-md gap-4 bg-gray-900 p-4"
		on:submit|preventDefault={() => handleSubmit(chatArgs, scrollToDiv)}
	>
		<div class="input-group input-group-divider grid-cols-4 rounded-container-token">
			<input class="bg-transparent border-0 ring-0 col-span-3" type="text" name="prompt" bind:value={chatArgs.query}>
			<button class="variant-filled-primary">Send</button>
		</div>
					
	</form>
</div>


