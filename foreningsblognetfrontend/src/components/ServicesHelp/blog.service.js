import { requestOptions } from '../Helpers/request-options';

export const blogService = {
    getAll,
    create,
    

};


function create(UserId) {
    return fetch('https://localhost:7282/api/blogs', requestOptions.post(UserId))
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