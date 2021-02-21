import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  year: null
};
const mutations = {
  setYear(state, year) {
    state.year = year
  }
};
const actions = {
  setYear({ commit }, year) {
    commit('setYear', year)
  }
};
const getters = {
  year: state => state.year
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
