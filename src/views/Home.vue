<template>
  <div class="home">
    <div class="home__Title">List of todos</div>
    <div class="home__EmptyTodos" v-if="empty">There no Todos yet</div>
    <ListOfTodos />
  </div>
</template>

<script>
  import ListOfTodos from "../components/ListOfTodos.vue";
  export default {
    name: "Home",
    components: {
      ListOfTodos,
    },
    data() {
      return {
        empty: true,
      };
    },
  };
</script>
