<script lang="ts">

    export let data;
    $:( {kw} = data );

    import Prompt from '$lib/components/prompt/Prompt.svelte';

</script>


<h1>
    {kw}
</h1>


<Prompt />