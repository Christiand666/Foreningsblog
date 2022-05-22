import { requestOptions } from '../Helpers/request-options';
// ViewController
export const blogService = {
    getAll,
    create,
    Delete
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

function Delete(id) {
    return fetch(`https://localhost:7282/api/blogs/${id}`, requestOptions.delete())
        .then(handleResponse);
    }

// our handlereponse based on our reponse converts to json format if 401 or 403 is reponded logout and reload the page.
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