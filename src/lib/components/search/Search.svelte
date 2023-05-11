
<script lang="ts">
    import {Search} from 'lucide-svelte'

    import { browser } from '$app/environment';


    async function searchKeyword(e) {
        const form = e.target
        const data = new FormData(form)
        const req = Object.fromEntries(data) 
        const kw = req.keyword as string

        if (browser) { 
            window.location.href = `/products?kw=${kw}`;
        }
    }

    import {onMount} from 'svelte'
    onMount(() => {
        // read href query "kw" and set it to the input field
        const urlParams = new URLSearchParams(window.location.search);
        const kw = urlParams.get('kw');
        if (kw) {
            const input = document.querySelector('input[name="keyword"]') as HTMLInputElement
            input.value = kw
        }
    })


</script>



<div class="my-5" >

    <form class="flex w-full justify-center"  on:submit|preventDefault={searchKeyword}>
        <label class="label w-4/6 mx-2">
            <input name="keyword" class="input variant-ringed w-100" type="text" placeholder="Search" />
        </label>
        
        <button type="submit" class="btn-icon variant-filled-secondary mx-2">
            <span><Search /></span>
        </button>
    </form>

</div>    

