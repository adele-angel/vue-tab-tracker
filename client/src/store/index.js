import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	// [strict: true] prevents modification of the state
	// unless its through action or mutation
	strict: true,
	// global application states
	state: {
		token: null,
		user: null,
		isUserLoggedIn: false
	},
	mutations: {
		setToken(state, data) {
			state.token = data;
			if (state.token) {
				state.isUserLoggedIn = true;
			} else {
				state.isUserLoggedIn = false;
			}
		},
		setUser(state, data) {
			state.user = data;
		}
	},
	actions: {
		setToken({ commit }, token) {
			commit("setToken", token);
		},
		setUser({ commit }, user) {
			commit("setUser", user);
		}
	},
	modules: {}
});
