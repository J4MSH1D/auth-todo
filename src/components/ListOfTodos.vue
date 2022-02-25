<template>
  <div class="list">
    <div class="list__Title">Title 1</div>
    <div class="list__Text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ad
      expedita dolor, nisi et cupiditate ex corporis inventore sunt quos natus
      beatae amet, officiis, qui odio minus adipisci quo ducimus ipsa quasi quas
      necessitatibus? Consequuntur, excepturi. Tenetur delectus dolorum, quasi
      soluta atque, sit dolore, quisquam ex alias perferendis magni laudantium
      aut ea veritatis accusamus amet?
    </div>
  </div>
</template>

<script>
  import { todos } from "../mixins/Home/todos";
  export default {
    name: "List Of Todos",
    mixins: [todos],
  };
</script>

<style></style>
