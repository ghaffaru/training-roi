import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  getters: {
    getUserInfo: state =>  {
      return state.user
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    logoutUser(state) {
      state.user = {}
    }
  },
  actions: {
    setUser({commit}, user) {
      commit('setUser', user);
    },

    logoutUser({commit}) {
      commit('logoutUser')
    }
  },
  modules: {
  },
  plugins: [new VuexPersistence().plugin]
})
