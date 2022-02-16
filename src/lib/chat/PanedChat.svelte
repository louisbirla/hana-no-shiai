<script lang="ts">
	import GameChat from "./GameChat.svelte";
	import GlobalChat from "./GlobalChat.svelte";

	export let gameId: string;

	let globalShown = false;
</script>

<div class="wrap">
	<div>
		<button on:click={() => (globalShown = false)}>Game Chat</button>
		<button on:click={() => (globalShown = true)}>Global Chat</button>
	</div>
	<div style:display={globalShown ? "none" : "initial"}><GameChat {gameId} /></div>
	<div style:display={globalShown ? "initial" : "none"}><GlobalChat /></div>
</div>

<style lang="scss">
	.wrap {
		display: inline-flex;
		flex-direction: column;
		margin: 5px;
		button {
			margin: 5px;
		}
	}
</style>
