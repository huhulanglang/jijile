import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)
export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })],
  state: {
    tabbarShow:true
  },
  getters:{
    getTabbarShow(state){
        return state.tabbarShow
    }
  },
  mutations: {
    updateTabbarShow(state, payload) {
      state.tabbarShow = payload
    }
  },
  actions: {

  }
})
