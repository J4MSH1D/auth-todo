<template>
  <div class="authorization">
    <Login v-if="loginForm" @changForm="changeForms" />
    <Register v-if="registerForm" @changForm="changeForms" />
  </div>
</template>

<script>
  import Login from "../components/Login.vue";
  import Register from "../components/Register.vue";
  import { formChanger } from "../mixins/Auth/formChanger";
  export default {
    name: "Authorization",
    components: {
      Login,
      Register,
    },
    mixins: [formChanger],
  };
</script>

<style></style>
