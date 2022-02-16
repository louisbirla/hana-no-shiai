<script lang="ts">
	import { supabase } from "../supabase/client";

	let player_id = "";

	let invitePlayerPromise: Promise<void> = undefined;

	async function invitePlayer() {
		const { error } = await supabase.rpc("invite_player", { player_id });
		if (error) throw error;
		return;
	}
	function causeInvitePlayer() {
		invitePlayerPromise = invitePlayer();
	}
</script>

<p>Invite a player:</p>

<form on:submit|preventDefault={causeInvitePlayer}>
	{#if invitePlayerPromise}
	{#await invitePlayerPromise}
		<input disabled bind:value={player_id} type="text" placeholder="User ID" />
		<input disabled type="submit" value="Inviting...">
	{:then}
		<input bind:value={player_id} type="text" placeholder="User ID" />
	<input type="submit" value="Invite user">
	<p>Invited player.</p>
	{:catch error}
	<input bind:value={player_id} type="text" placeholder="User ID" />
	<input type="submit" value="Invite user">
		<p>Error: {error.message}</p>
	{/await}
{:else}
	<input bind:value={player_id} type="text" placeholder="User ID" />
	<input type="submit" value="Invite user">
{/if}
</form>

<style lang="scss">
	p {
		margin: 0;
	}
</style>
