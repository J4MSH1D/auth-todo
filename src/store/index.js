import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      user: null,
    };
  },
  mutations: {
    increment(state, payload) {
      state.user = payload;
    },
  },
});

export default store;
