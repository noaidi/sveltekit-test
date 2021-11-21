<script context="module">
	export async function load({ fetch }) {
		const res = await fetch(`/api/blog`, { method: 'GET' });
		if (res.ok) {
			return {
				props: await res.json()
			};
		}
		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
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
					<div>{row.body}</div>
				</a>
			</article>
		{/each}
	</section>
{/if}