<script>
	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data);
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		{#each data.characters as character}
			<ul>
				<a href="/{character.playerId}/{character.id}">{character.name}</a>
			</ul>
		{/each}
	</div>
</div>
