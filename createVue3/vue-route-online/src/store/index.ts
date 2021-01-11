import { createStore } from 'vuex'
console.log("store ---happen");
export default createStore({
  state: {
    Routes: [],
    Route: []

  },
  mutations: {
    addRoutes(state, payload) {
      state.Routes = payload;
    },
    addRoutess(state, payload) {
      state.Route = payload;
    }
  },
  actions: {
  },
  modules: {
  }
  , getters: {
    newRoutes(state) {
      return state.Routes;
    },
    newRoutess(state) {
      return state.Route;
    }
  }
})
