import axios from "axios"
import { USERS } from "../../composables/Links/links";
import { AUTH } from "../../composables/Links/links"
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
      if(this.password === this.cPassword && this.email.length > 5 && this.password.length > 5) {
        const newUser= {
          id: this.email,
          email: this.email,
          password: this.password,
          admin: false
        }
        this.error = false
        try {
          await axios.post(USERS, newUser)
          this.error = false
          let encoded = btoa(this.email)
          localStorage.setItem("jwt", encoded)
          await this.$store.dispatch(AUTH)
          this.email = this.password = this.cPassword = ""
          this.$router.push({name: "Home"})
        } catch{
          this.error = true
        }
      } else {
        this.error = true
      }
    },
  },
};
