<script lang="ts">
	export let height = 100;

	$: width = 0.61 * height;
	$: border = 0.03 * height;
</script>

<div
	style:height={`${height}px`}
	style:width={`${width}px`}
	style:outline-width={`${border}px`}
	style:outline-offset={`-${border}px`}
/>

<style lang="scss">
	div {
		display: inline-block;
		background-color: black;
		outline-color: colors.$hana-red;
		outline-style: solid;
	}
</style>
