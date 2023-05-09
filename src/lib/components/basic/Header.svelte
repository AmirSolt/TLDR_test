<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton'
	import { Flame, Home } from 'lucide-svelte'

	import Logout from '$lib/components/auth/Logout.svelte'
	
	import { page } from '$app/stores'
	$: user = $page.data.session?.user
</script>





<AppBar>
	<svelte:fragment slot="lead">
		<a class="flex gap-1" href="/">
			<Flame /> TL;DR
		</a>
	</svelte:fragment>

	<svelte:fragment slot="trail">

		{#if user}
			<Logout />
		{/if}

		<LightSwitch />
	</svelte:fragment>
</AppBar>