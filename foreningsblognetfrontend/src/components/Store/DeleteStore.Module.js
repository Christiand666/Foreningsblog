import { userService } from '../ServicesHelp/user.service';


const user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { status: user } : { status: {}, user: null };

export const DeleteUser = {
	namespaced: true,
	state: initialState,
	actions: {
		Delete({ dispatch, commit }, { id }) {
			commit('DeleteRequest', { id });

			userService.Delete(id).then(
				(user) => {
					commit('DeleteSuccess', user);
				},
				(error) => {
					commit('DeleteFailure', error);
					dispatch('alert/error', error, { root: true });
				}
			);
		},
	},
	mutations: {
		DeleteRequest(state, user) {
			state.status = {};
			state.user = user;
		},
		DeleteSuccess(state, user) {
			state.status = {};
			state.user = user;
		},
		DeleteFailure(state) {
			state.status = {};
			state.user = null;
		},
	},
};
