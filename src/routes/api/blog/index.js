export async function get({params}) {
	// const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay));
	// await wait(2000);
	return {
		status: 200,
		body: {
			rows: [
				{
					url: '/blog/sample-title-3',
					title: 'Sample Title 3',
					body: 'Sample Body'
				}, {
					url: '/blog/sample-title-2',
					title: 'Sample Title 2',
					body: 'Sample Body'
				}, {
					url: '/blog/sample-title-1',
					title: 'Sample Title 1',
					body: 'Sample Body'
				}
			]
		}
	};
}