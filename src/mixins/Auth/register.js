import {  } from "../../composables/post.js";
import { USERS } from "../../composables/Links/links";
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
    async register() {
      if ( this.email.length < 5 || this.password.length < 5 || this.password !== this.cPassword ) {
        this.error = true;
      } else {
       this.postNewUser()
      }
    },
    async postNewUser(){
      try {
        let newUser = {
          id: this.email,
          email: this.email,
          password: this.password,
          admin: false,
        }
        const response = await post(USERS, newUser)
        console.log(response.data);
      } catch {
        this.error = true
      }
    }
  },
};
