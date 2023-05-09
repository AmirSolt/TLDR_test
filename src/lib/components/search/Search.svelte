
<script lang="ts">
    import {Search} from 'lucide-svelte'



    $: keyWord = ""
</script>



<div class="flex w-full justify-center">

    <label class="label w-4/6 mx-2">
        <input bind:value={keyWord} class="input variant-ghost w-100" type="text" placeholder="Search" />
    </label>
    
    <a href="/products?kw={keyWord}" type="button" class="btn-icon variant-filled  mx-2">
        <span><Search /></span>
    </a>

</div>    

