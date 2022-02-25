import { post } from "../../composables/Admin/post.js"
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
          await post(data)
          this.title = this.text = ""
        } catch (e) {
          console.log(e.message);
        }
      }
    },
  },
};
