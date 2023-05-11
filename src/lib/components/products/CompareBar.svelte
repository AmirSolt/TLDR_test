<script lang="ts">
    import {X} from "lucide-svelte";
    import Prompt from "$lib/components/prompt/Prompt.svelte";
    let showPrompt: boolean = false;

    import {compareList} from './compareList';
    function removeCompareProduct(product){
        compareList.update(
            (list) => list.filter((item) => item.asin !== product.asin)
        )
    }


</script>

<div>
    {#each $compareList as product}
        <button type="button" class="btn variant-filled" on:click={()=>removeCompareProduct(product)}>
            {product.title} <X />
        </button>
    {/each}
</div>

<button class="btn variant-filled" type="button" on:click={() => (showPrompt = true)}>
    Open Chat
</button>   


<Prompt bind:showPrompt={showPrompt} />