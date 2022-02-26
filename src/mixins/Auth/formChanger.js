import Login from "../../components/Login.vue"
import Register from "../../components/Register.vue"
export const formChanger = {
  data() {
    return {
      loginForm: true,
      registerForm: false,
    };
  },
  components: {
    Login,
    Register,
  },
  methods: {
    changeForms() {
      this.loginForm = !this.loginForm;
      this.registerForm = !this.registerForm;
    },
  },
};
