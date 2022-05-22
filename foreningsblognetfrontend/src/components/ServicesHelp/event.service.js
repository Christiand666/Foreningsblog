import { requestOptions } from '../Helpers/request-options';
// ViewController

export const eventService = {
	getAll,
	create,
	attend,
};

function attend(EventId, UserId) {
	return fetch(
		`https://localhost:7282/api/events/attend/${EventId}/${UserId}`,
		requestOptions.post('')
	)
		.then(handleResponse)
		.then((event) => {
			return event;
		});
}

function create(ev) {
	return fetch(`https://localhost:7282/api/events`, requestOptions.post(ev))
		.then(handleResponse)
		.then((event) => {
			return event;
		});
}

function getAll() {
	return fetch(
		`https://localhost:7282/api/events`,
		requestOptions.get()
	).then(handleResponse);
}

// our handlereponse based on our reponse converts to json format if 401 or 403 is reponded logout and reload the page.
function handleResponse(response) {
	return response.text().then((text) => {
		const data = text && JSON.parse(text);
		if (!response.ok) {
			const error = (data && data.message) || response.statusText;
			return Promise.reject(error);
		}

		return data;
	});
}
