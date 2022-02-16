<script lang="ts">
	import { supabase } from "./supabase/client";

	let seat_count = 3;

	let createGamePromise: Promise<void> = undefined;

	async function createGame() {
		const { error } = await supabase.rpc("create_game", { total_seats: seat_count });
		if (error) throw error;
		location.reload();
		return;
	}
	function causeCreateGame() {
		createGamePromise = createGame();
	}
</script>

<p>Number of players</p>

{#if createGamePromise}
	{#await createGamePromise}
		<p>Creating game...</p>
	{:then}
		<p>Created game.</p>
	{:catch error}
		<p>Error: {error.message}</p>
	{/await}
{:else}
	<input bind:value={seat_count} type="number" placeholder="Seat count" />
	<button on:click={causeCreateGame}>Create Game</button>
{/if}

<style lang="scss">
	p {
		margin: 0;
	}
</style>
