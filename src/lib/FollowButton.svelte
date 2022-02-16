<script lang="ts">
	import { supabase } from "$lib/supabase/client";
	import { user } from "$lib/supabase/sessionStore";
	export let user_id: string;
	export let on_finish = () => {};

	async function followUser(user_id: string) {
		const { error, status } = await supabase.rpc("follow_user", { user_id });
		if (error && status !== 406) throw error;
		on_finish();
	}
	async function unfollowUser(user_id: string) {
		const { error, status } = await supabase.rpc("unfollow_user", { user_id });
		if (error && status !== 406) throw error;
		on_finish();
	}
</script>

{#if $user}
	{#if ($user?.profile?.following_ids || []).includes(user_id)}
		<button on:click={() => unfollowUser(user_id)}>Unfollow</button>
	{:else}
		<button on:click={() => followUser(user_id)}>Follow</button>
	{/if}
{:else}
	<p>You must be logged in to follow a user.</p>
{/if}
