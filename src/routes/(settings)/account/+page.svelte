<script>
	import { page } from '$app/stores';
	$: ({ session } = $page.data);
</script>



<h1>
    Account
</h1>

<h3>
    {session?.user}
</h3>