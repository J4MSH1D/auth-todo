import axios from "axios";
import { TODOS, TODOS_V } from "../../composables/Links/links";
import Loading from "../../components/Loading.vue";
export const admin = {
  data() {
    return {
      title: "",
      text: "",
      error: false,
      loading: false,
    };
  },
  components: {
    Loading,
  },
  methods: {
    async submit() {
      if (this.title.length < 5 || this.text.length < 10) {
        this.error = true;
      } else {
        this.loading = true;
        try {
          this.error = false;
          const data = {
            title: this.title,
            text: this.text,
          };
          await axios.post(TODOS, data);
          this.title = this.text = "";
          this.loading = false;
        } catch (e) {
          this.loading = false;
          console.log(e.message);
        }
      }
    },
    clear() {
      this.title = this.text = "";
    },
  },
  async beforeUnmount() {
    try {
      await this.$store.dispatch(TODOS_V);
    } catch (e) {
      console.log(e.message);
    }
  },
};
