import axios from "axios";
export const todos = {
  namespaced: true,
  state: () => {
    return {
      todos: null,
    };
  },
  mutations: {
    setTodos: (state, payload) => (state.todos = payload),
  },
  actions: {
    async getTodos(context) {
      try {
        const res = await axios.get("todos");
        context.commit("setTodos", res.data);
      } catch (e) {
        console.log(e.message);
      }
    },
  },
};
