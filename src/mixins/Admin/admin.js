import axios from "axios";
import { TODOS } from "../../composables/Links/links.js";
import { TODOS_V } from "../../composables/Links/links"
export const admin = {
  data() {
    return {
      title: "",
      text: "",
      error: false,
    };
  },
  methods: {
    async submit() {
      if (this.title.length < 5 || this.text.length < 10) {
        this.error = true;
      } else {
        try {
          const data = {
            title: this.title,
            text: this.text,
          };
          await axios.post(TODOS, data);
          await this.$store.dispatch(TODOS_V)
          this.title = this.text = "";
        } catch (e) {
          console.log(e.message);
        }
      }
    },
  },
};
