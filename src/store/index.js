import { createStore } from "vuex";
import axios from "axios";
import { todos } from "./Todos/todos.js"

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
  modules: {
    todos: todos
  },
});

export default store;
