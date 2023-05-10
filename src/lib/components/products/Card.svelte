
<script lang="ts">

    export let product:any; 
    


</script>



<a id="product_card" href="{product.url}" class="card p-4"> 
    <div id="media">
        <img src="{product.thumbnail}" alt="Thumbnail">
    </div>
    <div id="info">
        <div id="brand" class="row">
            
        </div>
        <div id="title" class="row">
            <h3>{product.title}</h3>
        </div>
        <div id="review" class="row">
            {product.reviews.total_reviews}
            {product.reviews.rating}
        </div>
        <div id="price" class="row">
            <h3>
                {product.price.currency} {product.price.current_price}
            </h3>

            {#if product.price.discounted}
                <h3>
                    {product.price.currency} {product.price.before_price}
                </h3>
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

</a>

