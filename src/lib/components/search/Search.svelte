
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


</script>



<div >

    <form class="flex w-full justify-center"  on:submit|preventDefault={searchKeyword}>
        <label class="label w-4/6 mx-2">
            <input name="keyword" class="input variant-ghost w-100" type="text" placeholder="Search" />
        </label>
        
        <button type="submit" class="btn-icon variant-filled mx-2">
            <span><Search /></span>
        </button>
    </form>

</div>    

