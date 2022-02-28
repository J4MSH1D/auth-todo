<template>
  <div class="todo__changer">
    <div class="todo__changer__form">
      <div class="todo__changer__form__title">Form Changer</div>
      <div class="todo__changer__form__fields">
        <input type="text" placeholder="Title" v-model="title">
      </div>
      <div class="todo__changer__form__fields">
        <textarea type="text" placeholder="Title" cols="50" rows="10" v-model="text"></textarea>
      </div>
      <div class="form_changer__button">
        <button @click="goBack" class="todo_goback">Go Back</button><button @click="changePost">Change</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import { TODO } from "../composables/Links/links"
export default {
    name: "Todo Changer",
    data(){
      return {
        title: this.$route.params.title,
        text: this.$route.params.text,
        id: this.$route.params.id
      }
    },
    methods: {
      async changePost() {
        try {
          let data = {
            title: this.title,
            text: this.text
          }
          await axios.patch(TODO(this.id), data)
          this.$router.push({name: "Admin"})
        } catch (e) {
          console.log(e.message);
        }
      },
      goBack(){
        this.$router.go(-1)
      }
    }
}
</script>