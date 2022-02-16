<script lang="ts">
	import Card from "./Card.svelte";
	import type { CardName } from "./cards";

	export let cards: CardName[] = [];
</script>

<div class="mat">
	<p>Released cards</p>
	<div class="cards">
		{#each cards as cardName}
			<div class="card"><Card {cardName} /></div>
		{:else}
			<p title="No cards released">空</p>
		{/each}
	</div>
	<div class="guide">
		<p>New</p>
		<p>Old</p>
	</div>
</div>

<style lang="scss">
	.mat {
		background-color: lighten(colors.$hana-green, 10%);
		padding: 5px;
		display: inline-block;
		.cards {
			display: flex;
			.card {
				margin: 3px;
				display: inline-block;
				height: 100px;
			}
			p {
				color: darken(colors.$hana-green, 10%);
				font-weight: bold;
				font-size: 2em;
				margin-bottom: 20px;
				margin-top: 25px;
				text-align: center;
				width: 100%;
				margin-left: 10px;
			}
		}
	}
	p {
		margin: 0;
		margin-left: 5px;
	}
	.guide {
		display: flex;
		justify-content: space-between;
	}
</style>
