import { createStore } from "vuex";
import axios from "axios";
import { todos } from "./Todos/todos.js";
import { auth } from "./Auth/auth.js"
import { TODOS_V } from "../composables/Links/links";
import { USERS } from "../composables/Links/links";
import { AUTH } from "../composables/Links/links"


const store = createStore({
  state() {
    return {
      users: null,
    };
  },
  mutations: {
    setUsers: (state, payload) => (state.users = payload),
  },
  actions: {
    async getAllUsers(context) {
      try {
        const res = await axios.get(USERS);
        context.commit("setUsers", res.data)
        console.log(res.data);
      } catch (e) {
        console.log(e.message);
      }
    },
  },
  modules: {
    todos: todos,
    auth: auth
  },
});

store.dispatch(AUTH)
store.dispatch(TODOS_V);

export default store;
