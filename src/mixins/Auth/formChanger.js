export const formChanger = {
  data() {
    return {
      loginForm: true,
      registerForm: false,
    };
  },
  methods: {
    changeForms() {
      this.loginForm = !this.loginForm;
      this.registerForm = !this.registerForm;
    },
  },
};
