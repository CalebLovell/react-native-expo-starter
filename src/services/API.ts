export const apiCall = async (request: Request): Promise<Response> => {
	return await fetch(request);
};

const getUser = new Request(`https://jsonplaceholder.typicode.com/users/1`, {
	method: `GET`,
	body: JSON.stringify({
		title: `get user`,
		body: `nothing`,
	}),
});
