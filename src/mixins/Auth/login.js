export const loginForm = {
  data() {
    return {
      email: "",
      password: "",
      error: false,
    };
  },
  methods: {
    login(){
      if(this.email.length < 5 || this.password.length < 8) {
        this.error = true
      } else if(this.email.length >= 5 && this.password.length >= 8) {
        this.error = false
        this.email = this.password = ""
        console.log("Correct");
      }
    }
  }
};
