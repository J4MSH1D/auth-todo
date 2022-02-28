import axios from "axios";
import { USER } from "../../composables/Links/links";
export const auth = {
  namespaced: true,
  state() {
    return {
      user: null,
    };
  },
  mutations: {
    setUser: (state, payload) => (state.user = payload),
  },
  actions: {
    async getUser(context) {
      try {
        const id = atob(localStorage.jwt);
        const res = await axios.get(USER(id));
        context.commit("setUser", res.data);
      } catch {
        context.commit("setUser", null);
      }
    },
  },
};
