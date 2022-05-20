import { requestOptions } from '../Helpers/request-options';

export const blogService = {
    getAll,
    create,
    attend

};

function attend(BlogId, UserId) {
    return fetch(`https://localhost:7282/api/blogs/attend/${BlogId}/${UserId}`, requestOptions.post(''))
        .then(handleResponse)
        .then(blog => {
            return blog;
        });
}

function create(ev) {
    return fetch('https://localhost:7282/api/blogs', requestOptions.post(ev))
        .then(handleResponse)
        .then(blog => {
            return blog;
        });
}

function getAll() {
    return fetch(`https://localhost:7282/api/blogs`, requestOptions.get())
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