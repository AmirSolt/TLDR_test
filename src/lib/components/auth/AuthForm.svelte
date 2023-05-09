<script lang='ts'>
	import { enhance } from '$app/forms';
    import {page} from '$app/stores';
    
    $: ({supabase, session} = $page.data)




</script>



{#if $page.form}
    <p>{$page.form.message}</p>
{/if}

<form action="/api/auth/?/login" use:enhance method="post">

    <label for="email">Email</label>
    <input type="email" name="email" id="email" required>

    <label for="password">Password</label>
    <input type="password" name="password" id="password" required>

    <button class="btn variant-filled" type="submit">Login</button>
</form>


<br>
<br>
<form action="/api/auth/?/signup" use:enhance method="post">

    <label for="email">Email</label>
    <input type="email" name="email" id="email" required>

    <label for="password">Password</label>
    <input type="password" name="password" id="password" required>

    <button class="btn variant-filled" type="submit">Register</button>
</form>

<br>
<br>
<form action="/api/auth/?/verifyToken" use:enhance method="post">
    <label for="email">Email</label>
    <input type="email" name="email" id="email" required>

    <label for="token">Token</label>
    <input type="text" name="token" id="token" required>

    <button class="btn variant-filled" type="submit">Verify</button>
</form>

<br>
<br>
<form action="/api/auth/?/logout" use:enhance method="post">
    <button class="btn variant-filled" type="submit">Logout</button>
</form>