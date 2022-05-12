import { userService } from '../ServicesHelp/user.service';
import router from '../Helpers/Routes';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
    ? { status: user }
    : { status: {}, user: null };

export const RegisterUser = {
    namespaced: true,
    state: initialState,
    actions: {
        Register({ dispatch, commit }, { Email, password, FullName }) {
            commit('RegisterRequest', { Email });

            userService.Register(Email, password, FullName)
                .then(
                    user => {
                        commit('RegisterSuccess', user);
                        router.push('/Login');
                    },
                    error => {
                        commit('RegisterFailure', error);
                        dispatch('alert/error', error, { root: true });
                    }
                );
        },
       
    },
    mutations: {
        RegisterRequest(state, user){
            state.status = {};
            state.user = user;
        },
        RegisterSuccess(state, user) {
            state.status = {};
            state.user = user;
        },
        RegisterFailure(state) {
            state.status = {};
            state.user = null;
        },
    }
}