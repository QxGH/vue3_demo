import { createStore } from 'vuex'

export default createStore({
  state: {
    userInfo: {}
  },
  mutations: {
    CHANGE_USER_INFO(state, val) {
      state.userInfo = val;
    }
  },
  actions: {
  },
  modules: {
  }
})
