<script>
	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data);
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<ul>{data.character.name}</ul>
		<ul>{data.character.class}</ul>
		<ul>{data.character.exp}</ul>
	</div>
</div>
