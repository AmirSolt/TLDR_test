
<script lang="ts">
    export let product:any; 
    
    import StarRating from "./StarRating.svelte";


    import {compareList} from './compareList';


    const MAX_COMPARE_LIST_SIZE = 3;

    function addCompareProduct(){
        compareList.update(

            (list)=>{
                if(list.length>=MAX_COMPARE_LIST_SIZE){
                    return list;
                }
                return list.find((item) => item.asin === product.asin) ? list : [...list, product]
            }
        )
    }



</script>



<div id="product_card"  class="card variant-soft rounded-lg p-4 overflow-hidden"> 

    <!-- <Prompt {product} bind:showPrompt /> -->


    <header>
        <a href="{product.url}" id="media" target="_blank" rel="noopener">
            <img src="{product.thumbnail}" alt="Thumbnail" class=" w-full ">
        </a>
    </header>
    

    <div id="info">
        <div id="brand" class="row">
            
        </div>
        <div id="title" class="row">
            <h3>{product.title}</h3>
        </div>
        <div id="review" class="row flex items-center">
            <StarRating rating={product.reviews.rating} />
            <span class="mx-2">({product.reviews.total_reviews})</span>
            
        </div>
        <div id="price" class="row">
            <h3>
                {product.price.currency} {product.price.current_price}
            </h3>

            {#if product.price.discounted}
                <s>
                    {product.price.currency} {product.price.before_price}
                </s>
                {#if product.price.savings_percent > product.price.savings_amount}
                    <h3>
                        {product.price.savings_percent}% off
                    </h3>
                {:else}
                    <h3>
                        {product.price.currency} {product.price.savings_amount} off
                    </h3>
                {/if}
            {/if}

        </div>
        <div id="extra" class="row">
            {#if product.bestSeller || product.amazonChoice}
                <h3>
                    Marked as {[product.bestSeller, product.amazonChoice].join("and ")}
                </h3>
            {/if}

            {#if product.amazonPrime}
                <h3>
                    {product.amazonPrime}
                </h3>
            {/if}
        </div>

    </div>

    <footer>

        {#if $compareList.find((item) => item.asin === product.asin) || $compareList.length>=MAX_COMPARE_LIST_SIZE}
            <button class="btn variant-filled" type="button" on:click={addCompareProduct} disabled>
                +Compare
            </button>
        {:else}
            <button class="btn variant-filled" type="button" on:click={addCompareProduct}>
                +Compare
            </button>

        {/if}


    </footer>

</div>

