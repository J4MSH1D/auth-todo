import { createStore } from "vuex";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3333/";

const store = createStore({
  state() {
    return {
      user: null,
    };
  },
  mutations: {
    increment: (state, payload) => (state.user = payload),
  },
  actions: {
    async getAllUsers() {
      try {
        const res = await axios.get("users");
        console.log(res.data);
      } catch (e) {
        console.log(e.message);
      }
    },
  },
});

store.dispatch("getAllUsers");

export default store;