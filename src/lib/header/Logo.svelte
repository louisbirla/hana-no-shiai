<template lang="pug">
	p
		span 花
		span の
		span 試
		span 合
</template>

<style lang="scss">
	p {
		font-weight: bold;
		font-size: 2em;
		margin: 0;
		letter-spacing: -4px;
	}
	span:nth-child(1) {
		color: colors.$hana-red;
	}
	span:nth-child(2) {
		color: colors.$hana-orange;
	}
	span:nth-child(3) {
		color: colors.$hana-purple;
	}
	span:nth-child(4) {
		color: colors.$hana-pink;
	}
</style>
