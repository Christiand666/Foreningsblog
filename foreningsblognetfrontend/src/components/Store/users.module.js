import { userService } from '../ServicesHelp/user.service';

export const users = {
	namespaced: true,
	state: {
		all: {},
		isLoggedIn: localStorage.getItem('user')? true :false,
		isAdmin: JSON.parse(localStorage.getItem('user'))?.role==='Admin',
	},
	getters: {
		GetLoginState(state) {
			return state.isLoggedIn;
		},
		GetAdminState(state) {
			return state.isAdmin;
		},
	},
	actions: {
		getAll({ commit }) {
			commit('getAllRequest');

			userService.getAll().then(
				(users) => commit('getAllSuccess', users),
				(error) => commit('getAllFailure', error)
			);
		},
		UpdateLogin({ commit }, state) {
			commit('UpdateIsloggedIn', state);
		},
		UpdateRegister({ commit }, state) {
			commit('UpdateRegister', state);
		},
		UpdateAdmin({ commit }, state) {
			commit('UpdateIsAdmin', state);
		},
	},
	mutations: {
		getAllRequest(state) {
			state.all = { loading: true };
		},
		getAllSuccess(state, users) {
			state.all = { items: users };
		},
		getAllFailure(state, error) {
			state.all = { error };
		},
		UpdateIsloggedIn(state, value) {
			state.isLoggedIn = value;
		},
		UpdateIsAdmin(state, value) {
			state.isAdmin = value;
		},
	},
};
