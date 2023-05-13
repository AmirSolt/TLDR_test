
<script lang="ts">
    import {Search} from 'lucide-svelte'
    import { browser } from '$app/environment';
    import {goto} from '$app/navigation';
    
    let searchTerm:string = '';

  
    import {onMount} from 'svelte'
    onMount(() => {
        // read href query "kw" and set it to the input field
        const urlParams = new URLSearchParams(window.location.search);
        const kw = urlParams.get('kw');
        searchTerm = kw??'';
    })


    async function searchForm(e) {
        if (searchTerm.length > 0) {
            goto(`/products/${searchTerm}`)
        }
    }

</script>






<div class="my-5" >
    <form class="flex w-full h-14 justify-center"  on:submit|preventDefault={searchForm}>
        <div class="input-group input-group-divider grid-cols-[1fr_auto] variant-ringed ">
            <input type="text" placeholder="Search..." bind:value={searchTerm} autocomplete="off" />
            <button class="variant-filled-secondary"><Search /></button>
        </div>
    </form>
</div>    

