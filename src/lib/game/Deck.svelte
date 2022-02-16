<script lang="ts">
	import CardBack from "$lib/game/CardBack.svelte";
import { supabase } from "$lib/supabase/client";

	export let card_count: number;

	let drawingCard = false;

	async function drawCard() {
		drawingCard = true;
		const { error } = await supabase.rpc("draw_card");
		drawingCard = false;
		if (error) throw error;
	}
</script>

<div>
	<p>Deck</p>
	<div title={`${card_count} cards left`}>
		<div style:opacity={card_count === 0 ? 0.6 : 1}><CardBack /></div>
		<p>{card_count}</p>
		<button on:click={drawCard}>Draw</button>
	</div>
</div>

<style lang="scss">
	div {
		background-color: opacify(colors.$hana-yellow, 0.6);
		padding: 5px;
		display: inline-block;
		div {
			display: inline-flex;
			flex-direction: row;
			align-items: baseline;
			p {
				font-weight: bold;
				color: colors.$hana-purple;
			}
		}
	}
	p {
		margin: 0;
		margin-left: 5px;
	}
</style>
