import { createStore } from "vuex";
import axios from "axios";
import { todos } from "./Todos/todos.js";

let email = "test@gmail.com"
let encoded = btoa(email)
let decoded = atob(encoded)
console.log(encoded, decoded);


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
    todos: todos,
  },
});

store.dispatch("todos/getTodos");

export default store;
