<template>
  <div class="login">
    <div class="login__Title">Login</div>
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
          <label for="password" >Password</label>
        </div>
        <div>
          <input type="password" v-model="password" id="password"/>
        </div>
      </div>
      <div class="error" v-if="error" >Your data is invalid</div>
    </div>
    <div class="login__Fields__Redirect" @click="changeForm">Back to Register</div>
    <div>
      <button>Login</button>
    </div>
  </div>
</template>

<script>
import { loginForm } from "../mixins/Auth/login"
  export default {
    name: "Login",
    mixins: [loginForm],
    methods: {
      changeForm(){
        this.$emit("changForm")
      }
    }
  };
</script>
