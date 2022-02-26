import axios from "axios"
import { USERS } from "../../composables/Links/links";
export const auth = {
    namespaced: true,
    state() {
        return {
            user: null
        }
    },
    getters: {
        email(state) {
            return state.user.email
        }
    },
    mutations: {
        setUser: (state, payload) => (state.user = payload)
    },
    actions: {
        async getUser(context) {
            try {
                const id = atob(localStorage.jwt);
                const res = await axios.get(USERS + `/${id}`)
                context.commit("setUser", res.data)
            } catch {
                context.commit("setUser", null)
            }
        }
    }
}