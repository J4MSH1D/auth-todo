export const registerForm = {
  data() {
    return {
      email: "",
      password: "",
      cPassword: "",
      error: false,
    };
  },
  methods: {
    register(){
      if(this.email.length < 5 || this.password.length < 5 || this.password != this.cPassword) {
        this.error = true;
        console.log("WOW");
      } else if(this.email.length >= 5 && this.password.length >= 5 && this.password === this.cPassword){
        this.error = false;
        this.email = this.password = this.cPassword = ""
        console.log("Something is yes");
      }
    }
  }
};
