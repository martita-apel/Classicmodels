import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: undefined,
  },
  mutations: {
    CURRENT_USER(state, user) {
      state.currentUser = user;
    },
  },
  actions: {
    updateUser({ commit }, user) {
      return new Promise((resolve, reject) => {
        try {
          commit("CURRENT_USER", user);
          resolve(user);
        } catch (e) {
          reject(e);
        }
      });
    },
  },
  modules: {},
});
