<script>
	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data);
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		{#each data.players as player}
			<ul>
				<a href="/{player.id}">Player: {player.email}</a>
			</ul>
		{/each}
	</div>
</div>
