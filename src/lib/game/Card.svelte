<script lang="ts">
	import CardBack from "$lib/game/CardBack.svelte";
	import { cardImageUrl, type CardName } from "./cards";

	export let cardName: CardName = undefined;
	export let height = 100;
	export let back = false;

	$: url = cardImageUrl(cardName);
</script>

{#if back || !cardName}
	<CardBack {height} />
{:else}
	<!-- TODO: Add tooltip info for each card -->
	<img title={cardName} style:height={`${height}px`} src={url} alt={cardName} />
{/if}
