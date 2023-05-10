<script lang="ts">

    export let data;
    $:( {kw, products} = data );

    import Prompt from '$lib/components/prompt/Prompt.svelte';

    import Card from '$lib/components/products/Card.svelte';

</script>


<h1>
    {kw}
</h1>


{#if products.length === 0}
    <h3>
        No products found
    </h3>
{:else}
    <div class="row">
        {#each products as product}
            <Card product={product} />
        {/each}
    </div>
{/if}

<!-- <Prompt /> -->