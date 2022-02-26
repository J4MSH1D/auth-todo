import axios from "axios";
import { USERS, AUTH } from "../../composables/Links/links";
export const loginForm = {
  data() {
    return {
      email: "",
      password: "",
      error: false,
    };
  },
  methods: {
    async login() {
      if (this.email.length < 5 || this.password.length < 8) {
        this.error = true;
      } else if (this.email.length >= 5 && this.password.length >= 8) {
        this.error = false;
        try {
          const id = this.email
          console.log(id);
          const res = await axios.get(USERS+`/${id}`);
          if (res.data.password === this.password) {
            const encoded = btoa(this.email);
            localStorage.setItem("jwt", encoded);
            await this.$store.dispatch(AUTH);
            this.email = this.password = "";
            this.$router.push({name: "Home"})
          } else {
            this.error = true;
          }
        } catch {
          this.error = true;
        }
      }
    },
  },
};
