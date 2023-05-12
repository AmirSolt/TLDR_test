<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import type { ChatCompletionRequestMessageRoleEnum } from 'openai'
	export let type: ChatCompletionRequestMessageRoleEnum
	export let message: string
</script>


{#if type === 'user'}


<div class="grid grid-cols-[1fr_auto] gap-2">
	<div class="card p-4 variant-soft rounded-tl-none space-y-2">
		<header class="flex justify-between items-center">
			<p class="font-bold">You</p>
		</header>
		<p>{message}</p>
	</div>
	<Avatar initials="Me" width="w-12" />
</div>
					

{:else}


<div class="grid grid-cols-[auto_1fr] gap-2">
	<Avatar initials="AI" width="w-12" />
	<div class="card p-4 rounded-tr-none space-y-2">
		<header class="flex justify-between items-center">
			<p class="font-bold">AI</p>
		</header>
		<p>{message}</p>
	</div>
</div>
					

{/if}