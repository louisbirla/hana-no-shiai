<script lang="ts">
	export let insertMessage: (message: string) => {};

	let message = "";
	async function submit() {
		insertMessage(message);
		message = "";
	}
</script>

<form on:submit|preventDefault={submit}>
	<input placeholder="Message" bind:value={message} />
	<input type="submit" />
</form>
