<script lang="ts">
	import Logo from "./Logo.svelte";
	import Nav from "./Nav.svelte";
</script>

<header>
	<Logo />
	<Nav />
</header>

<style lang="scss">
	header {
		display: flex;
		max-width: 100vw;
		justify-content: space-between;
		padding-left: 2em;
		padding-right: 2em;
	}
</style>
