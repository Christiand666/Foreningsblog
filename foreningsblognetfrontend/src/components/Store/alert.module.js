//our vuex alert module stores all the modules for out actions and mutations for succes and error
//commits a mutation based on action that happend
export const alert = {
	namespaced: true,
	state: {
		type: null,
		message: null,
	},
	actions: {
		success({ commit }, message) {
			commit('success', message);
		},
		error({ commit }, message) {
			commit('error', message);
		},
		clear({ commit }) {
			commit('clear');
		},
	},
	//mutations based on action
	mutations: {
		success(state, message) {
			state.type = 'alert-success';
			state.message = message;
		},
		error(state, message) {
			state.type = 'alert-danger';
			state.message = message;
		},
		clear(state) {
			state.type = null;
			state.message = null;
		},
	},
};
