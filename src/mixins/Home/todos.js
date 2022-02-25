export const todos = {
    data(){
        return {
            empty: true
        }
    },
    async created() {
        await this.$store.dispatch("todos/getTodos")
        if(this.$store.state.todos.todos.length > 0) {
            this.empty = false
        } else {
            this.empty = true
        }
    },
    computed: {
        todos() {
            return this.$store.state.todos.todos
        }
    }
}