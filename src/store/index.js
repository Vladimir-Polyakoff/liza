import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    refName: ''
  },
  getters: {
    getRefName (state) {
      return state.refName
    }
  },
  mutations: {
    changeRefName (state, name) {
      state.refName = name
    }
  },
  actions: {
    setRefName ({ commit, dispatch }, name) {
      dispatch('setRefName2', name)
    },
    setRefName2 ({ commit }, name) {
      commit('changeRefName', name)
    }
  },
  modules: {
  }
})
