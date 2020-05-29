// Example User CRUD API
import { User } from '../providers/AuthProvider';

const url = new URL(`http://www.example.com`);

enum Methods {
	GET = `GET`,
	POST = `POST`,
	PUT = `PUT`,
	DELETE = `DELETE`,
}

interface Request {
	method: Methods;
	headers: Headers;
	body: User;
}

interface Response {
	user: User;
	message: string;
}

export const getUser = async (body: User): Response => {
	// const Response = await body; // delete for real call
	return Response;
};

export const createUser = body => {
	// const req = fetch(url, {
	// 	method: `POST`,
	// 	headers: headers,
	// 	body: body,
	// });
	const Response = body; // delete for real call
	return Response;
};

export const updateUser = body => {
	// const req = fetch(url, {
	// 	method: `PUT`,
	// 	headers: headers,
	// 	body: body,
	// });
	const Response = body; // delete for real call
	return Response;
};

export const deleteUser = body => {
	// const req = fetch(url, {
	// 	method: `DELETE`,
	// 	headers: headers,
	// 	body: body,
	// });
	const Response = body; // delete for real call
	return Response;
};
