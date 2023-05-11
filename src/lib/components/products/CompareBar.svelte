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
        <!-- using tailwind turnecate button text in a way that it starts from begining and cuts in the middle -->
        <button type="button" class="w-32  btn variant-filled" on:click={()=>removeCompareProduct(product)}>
            <span class="truncate">
                {product.title}
            </span>
            <span>
                <X />
            </span>
        </button>
    {/each}

    <button class="btn variant-filled-primary" type="button" on:click={() => (showPrompt = true)}>
        Open Chat
    </button>   
</div>




<Prompt bind:showPrompt={showPrompt} />