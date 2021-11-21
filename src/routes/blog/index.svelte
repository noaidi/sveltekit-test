<script context="module">
	export async function load({ fetch }) {
		const res = await fetch(`/api/blog`, { method: 'GET' });
		if (!res.ok) {
			return {
				status: res.status,
				error: new Error(`Could not load ${url}`)
			};
		}
		return {
			props: await res.json()
		};
	}
</script>

<script>
	export let rows;
</script>

{#if rows}
	<ul>
		{#each rows as row}
			<li>
				<a href="{row.url}">{row.title}</a>
			</li>
		{/each}
	</ul>
{/if}