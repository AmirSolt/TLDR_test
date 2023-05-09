<script lang='ts'>
    import {page} from '$app/stores';
    $: ({supabase, session} = $page.data)




</script>


<h3>
    AuthForm || User email: {session?.user?.email}
</h3>

