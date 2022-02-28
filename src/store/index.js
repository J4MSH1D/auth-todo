import { createStore } from "vuex";
import axios from "axios";
import { todos } from "./Todos/todos.js";
import { auth } from "./Auth/auth.js";
import { TODOS_V } from "../composables/Links/links";
import { USERS } from "../composables/Links/links";
import { AUTH } from "../composables/Links/links";

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
        context.commit("setUsers", res.data);
      } catch (e) {
        console.log(e.message);
      }
    },
  },
  getters: {
    admins: (state) =>state.users.filter((user)=> user.admin === true),
    custom: (state) => state.users.filter((user) => user.admin === false)
  },
  modules: {
    todos: todos,
    auth: auth,
  },
});
store.dispatch("getAllUsers")
store.dispatch(AUTH);
store.dispatch(TODOS_V);

export default store;
