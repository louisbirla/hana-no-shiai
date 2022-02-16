<script lang="ts">
	import { supabase } from "./supabase/client";
	import { user } from "./supabase/sessionStore";

	let name = $user.profile.name;
	async function updateName() {
		const { error, status } = await supabase.rpc("update_profile_name", { new_name: name });
		if (error && status !== 406) throw error;
		location.reload();
	}
</script>

<form on:submit|preventDefault={updateName}>
	<input placeholder="Nickname" bind:value={name} />
	<input type="submit" value="Update Name" />
</form>
