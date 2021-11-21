export async function get({params}) {
	console.log(params);
	return {
		status: 200,
		body: {
			name: 'test',
			email: 'test@test.com'
		}
	}
}