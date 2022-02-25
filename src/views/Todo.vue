<template>
  <div class="todo">
      <div class="todo__Container">
        <div class="todo__Container__Title">{{ todo.title }}</div>
        <div>{{ todo.text }}</div>
        <div><button @click="goback">Go Back</button></div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Todo",
    data(){
      return {
        todo: {
          title: "",
          text: ""
        }
      }
    },
    created(){
      this.todo.title = this.$route.params.id,
      this.todo.text = this.$route.params.text
    },
    methods: {
      goback(){
        this.$router.go(-1)
      }
    }
}
</script>

<style>

</style>