

<script lang="ts">
	
	import { ChatCompletionRequestMessageRoleEnum } from 'openai'
	import type {Message} from './chatHelper'
	import ChatMessage from './ChatMessage.svelte'

	let elemChat: HTMLElement;

	let messages:Message[] = [
		{
			"role": ChatCompletionRequestMessageRoleEnum.System,
			"content": "I'm system"
		},
		{
			"role": ChatCompletionRequestMessageRoleEnum.User,
			"content": "I'm User"
		},
		{
			"role": ChatCompletionRequestMessageRoleEnum.Assistant,
			"content": "I'm Assistant"
		},
		{
			"role": ChatCompletionRequestMessageRoleEnum.User,
			"content": "I'm user again"
		},
	]


	function resetCurrentMessage(): Message {
		return {
			"role": ChatCompletionRequestMessageRoleEnum.User,
			"content": ""
		};
	}

	let currentMessage:Message= resetCurrentMessage()

	function scrollChatBottom(behavior?: ScrollBehavior): void {
		elemChat.scrollTo({ top: elemChat.scrollHeight, behavior });
	}

	function handleSubmit(): void {

		// Update the message feed
		messages = [...messages, currentMessage];
		// Clear prompt
		currentMessage =  resetCurrentMessage()
		// Smooth scroll to bottom
		// Timeout prevents race condition
		setTimeout(() => {
			scrollChatBottom('smooth');
		}, 0);
	}


</script>



<div class="grid grid-row-[1fr_auto] ">
	<!-- Conversation -->
	<section bind:this={elemChat} class="max-h-80 overflow-y-auto">
		{#each messages as message}
			<ChatMessage {message} />
		{/each}
	</section>

	<br>
	<hr>
	<br>

	<section class="">

		<form
		on:submit|preventDefault={() => handleSubmit()}
		>
			<div class="input-group input-group-divider grid-cols-4 rounded-lg">
				<input class="col-span-3 " type="text" name="prompt" bind:value={currentMessage.content}>
				<button class="variant-filled-primary text-center">Send</button>
				
			</div>
						
		</form>

	</section>
</div>