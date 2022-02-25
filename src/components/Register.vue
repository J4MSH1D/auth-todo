<template>
  <div class="login">
    <div class="login__Title">Register</div>
    <div class="login__Fields">
      <div>
        <div class="login__Fields__Title">
          <label for="email">Email</label>
        </div>
        <div>
          <input type="email" v-model="email" id="email" />
        </div>
      </div>
      <div>
        <div class="login__Fields__Title">
          <label for="password">Password</label>
        </div>
        <div>
          <input type="password" v-model="password" id="password" />
        </div>
      </div>
      <div>
        <div class="login__Fields__Title">
          <label for="password1">Confirm Password</label>
        </div>
        <div>
          <input type="password" v-model="password" id="password1" />
        </div>
      </div>
      <div class="error" v-if="error">Your data is invalid</div>
    </div>
    <div class="login__Fields__Redirect" @click="changeForm">Back to Login</div>
    <div>
      <button>Register</button>
    </div>
  </div>
</template>

<script>
  import { registerForm } from "../mixins/Auth/register";
  export default {
    name: "Login",
    mixins: [registerForm],
    methods: {
      changeForm() {
        this.$emit("changForm");
      },
    },
  };
</script>
