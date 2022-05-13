import { requestOptions } from '../Helpers/request-options';

export const eventService = {
    getAll,
    create,
    attend

};

function attend(EventId, UserId) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ EventId, UserId })
    };

    return fetch(`https://localhost:7282/api/events/attend`, requestOptions)
        .then(handleResponse)
        .then(event => {
            return event;
        });
}

function create(ev) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ev })
    };

    return fetch(`https://localhost:7282/api/events`, requestOptions)
        .then(handleResponse)
        .then(event => {
            return event;
        });
}

function getAll() {
    return fetch(`https://localhost:7282/api/events`, requestOptions.get())
        .then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}