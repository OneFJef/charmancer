<script>
	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data);
</script>

<ul>{data.character.name}</ul>
<ul>{data.character.class}</ul>
<ul>{data.character.exp}</ul>
