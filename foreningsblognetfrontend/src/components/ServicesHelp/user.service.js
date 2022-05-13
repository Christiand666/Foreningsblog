import { requestOptions } from '../Helpers/request-options';
import {store} from '../Store'



export const userService = {
    login,
    logout,
    getAll,
    Register

};

function login(Email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Email, password })
    };

    return fetch(`https://localhost:7282/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // login successful if there's a jwt token in the response
            if (user.token) {
                store.dispatch('users/UpdateLogin', true)
                
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                if (user.role === 'Admin') store.dispatch('users/UpdateAdmin', true);
            }

            return user;
        });
}

function Register(Email, password, FullName) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Email, password, FullName })
    };

    return fetch(`https://localhost:7282/api/users/Register`, requestOptions)
        .then(handleResponse)
        .then(user => {
            
            return user;
        });
}


function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    store.dispatch('users/UpdateLogin', false);
}

function getAll() {
    return fetch(`https://localhost:7282/users`, requestOptions.get())
        .then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if ([401, 403].indexOf(response.status) !== -1) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}