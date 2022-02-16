<script lang="ts">
	import { page } from "$app/stores";
	import FollowButton from "$lib/FollowButton.svelte";
	import { supabase } from "$lib/supabase/client";
	import { type Profile, PROFILE_TABLE } from "$lib/supabase/profile";
	import { updatedUserStore } from "$lib/supabase/sessionStore";

	async function getProfile() {
		const { data, error, status } = await supabase
			.from<Profile>(PROFILE_TABLE)
			.select()
			.eq("id", $page.params.user_id)
			.single();
		if (error && status !== 406) throw error;
		return data;
	}
</script>

<svelte:head>
	<title>User Profile - 花の試合</title>
</svelte:head>

{#await getProfile()}
	<p>Loading...</p>
{:then profile}
	{#if profile.name}
		<h1>{profile.name}</h1>
	{:else}
		<h1>{profile.id}</h1>
	{/if}
	<FollowButton on_finish={() => updatedUserStore(supabase.auth.user())} user_id={profile.id} />
	<pre title="User ID">{profile.id}</pre>
	<p>Joined {new Date(profile.created_at).toLocaleDateString()}</p>
	<h3>Following</h3>
	<ul>
		{#each profile.following_ids || [] as following_id}
			<li>
				<a href={`/u/${following_id}`}>{following_id}</a>
			</li>
		{:else}
			<p><i>This user is not following any users.</i></p>
		{/each}
	</ul>
{:catch error}
	<p>Error: {error.message}</p>
{/await}

<style>
	h1 {
		margin-bottom: 0;
	}
	pre {
		margin-top: 0;
	}
</style>
