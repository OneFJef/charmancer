<script>
	import { enhance } from '$app/forms';
	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<svelte:head>
	<title>Sign Up</title>
</svelte:head>

<h1>Sign Up</h1>

<section>
	<form use:enhance>
		<div class="group">
			<input
				class="input w-1/3 m-2"
				placeholder="Email"
				type="email"
				name="email"
				id="email"
				required
			/>
		</div>

		<div class="group">
			<input
				class="input w-1/3 m-2"
				placeholder="Password"
				type="password"
				name="password"
				id="password"
				required
			/>
		</div>

		<div class="submit-container">
			<button class="btn variant-filled w-32 m-2" type="submit">Sign Up</button>
		</div>

		{#if form?.error}
			<div class="notice error">
				{form.error}
			</div>
		{/if}
	</form>

	<div class="actions">
		<a href="/login" class="btn variant-filled w-32 m-2">Login</a>
	</div>
</section>
