<script lang="ts">

    export let data;
    $:( {kw, products} = data );

    import Prompt from '$lib/components/prompt/Prompt.svelte';
    import CompareBar from '$lib/components/products/CompareBar.svelte';
    import Card from '$lib/components/products/Card.svelte';

</script>


<CompareBar />


<h1>
    {kw}
</h1>


{#if products.length === 0}
    <h3>
        No products found
    </h3>
{:else}
    <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-rows-3">
        {#each products as product}
            <Card product={product} />
        {/each}
    </div>
{/if}

<!-- <Prompt /> -->