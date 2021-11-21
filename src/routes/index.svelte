<script context="module">
	export async function load({ fetch }) {
		const url = `/api`;
		const res = await fetch(url, { method: 'GET' });
		if (res.ok) {
			return {
				props: {
					user: await res.json()
				}
			};
		}
		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	export let user;
</script>

{user.name}
{user.email}