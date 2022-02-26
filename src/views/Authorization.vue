<template>
  <div class="authorization">
    <Login v-if="loginForm" @changeForm="changeForms" />
    <Register v-if="registerForm" @changeForm="changeForms" />
  </div>
</template>

<script>
  import { formChanger } from "../mixins/Auth/formChanger";
  export default {
    name: "Authorization",
    mixins: [formChanger],
  };
</script>
