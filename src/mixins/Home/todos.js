export const todos = {
  data() {
    return {
      empty: true,
    };
  },
  created(){
    this.todoChecker()
  },
  updated() {
    this.todoChecker()
  },
  methods: {
    todoChecker() {
      if (Boolean(this.todos)) {
          if(this.todos.length > 0) this.empty = false;
      } else {
        this.empty = true;
      }
    },
  },
  computed: {
    todos() {
      return this.$store.state.todos.todos;
    },
  },
};
