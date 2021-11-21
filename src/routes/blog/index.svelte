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
	<section>
		{#each rows as row}
			<article>
				<a href="{row.url}">
					<h4>{row.title}</h4>
					<p>{row.body}</p>
				</a>
			</article>
		{/each}
	</section>
{/if}