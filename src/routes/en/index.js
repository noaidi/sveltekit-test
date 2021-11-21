export async function get({host, path, query}) {
	console.log(host);
	console.log(path);
	console.log(query);
	return {
		status: 200,
		body: 'test'
	}
	// return {
	// 	headers: { Location: '/' },
	// 	status: 302
	// }
}

export async function post({query}) {
	console.log(query);
	return {
		status: 200,
		body: 'test'
	}
	// return {
	// 	headers: { Location: '/' },
	// 	status: 302
	// }
}