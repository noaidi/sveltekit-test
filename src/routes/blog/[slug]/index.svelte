<script context="module">
	export async function load({ page, fetch }) {
		const res = await fetch(`/api/blog/` + page.params.slug, { method: 'GET' });
		if (!res.ok) {
			return {
				status: res.status
			};
		}
		return {
			props: await res.json()
		};
	}
</script>

<script>
	export let row;
	export let list;
</script>

<article>
	<h1>{row.title}</h1>
	<p>{row.body}</p>
</article>

<a href="{list.url}">Back to List</a>