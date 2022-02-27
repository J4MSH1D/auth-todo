<template>
  <Navbar />
  <div class="home">
    <div class="home__Title">List of todos</div>
    <div class="home__EmptyTodos" v-if="empty">There no Todos yet</div>
    <ListOfTodos
      v-for="todo in todos"
      :key="todo.id"
      :title="todo.title"
      :text="todo.text"
    />
  </div>
</template>

<script>
  import ListOfTodos from "../components/ListOfTodos.vue";
  import { todos } from "../mixins/Home/todos";
  import { components } from "../mixins/Home/components"
  export default {
    name: "Home",
    components: {
      ListOfTodos,
    },
    mixins: [todos, components],
  };
</script>
