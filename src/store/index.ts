import { createStore } from 'vuex'

export default createStore({
  state: {
    currentHours: new Date().getHours(),
    currentMinutes: new Date().getMinutes()
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
