<script>
	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data);
</script>

{#each data.characters as character}
	<ul>
		<a href="/{character.playerId}/{character.id}">{character.name}</a>
	</ul>
{/each}
