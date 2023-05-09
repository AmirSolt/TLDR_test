<script lang="ts">

    export let data;
    $:( {kw} = data );

    import AuthForm from '$lib/components/auth/AuthForm.svelte'

</script>


<h1>
    {kw}
</h1>


<AuthForm />