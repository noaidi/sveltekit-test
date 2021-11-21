export async function get({params}) {
	// const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay));
	// await wait(2000);
	return {
		status: 200,
		body: {
			list: {
				url: '/blog'
			},
			row: {
				title: 'Sample Title',
				body: 'Sample Body'
			}
		}
	}
}