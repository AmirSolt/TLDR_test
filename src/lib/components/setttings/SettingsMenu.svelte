<script lang="ts">

	import {logout} from '$lib/components/auth/authFuncs';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	$: ({ supabase } = $page.data);

	function onSelectClick(e){
		// set Home as selected
		const destination = e.target.value
		e.target.value = 'home';
		if(destination === 'logout')
			logout(supabase);
		goto(`/${destination}`);
	}

</script>


<select class="select variant-soft border-0" on:change={onSelectClick} >
	<option class="hidden" value="home" disabled selected >Home</option>
	<option class="" value="account" >Account</option>
	<option class="" value="payment" >Payment</option>
	<option class="" value="logout" >Logout</option>
</select>

