<template>
  <div class="navbar">
    <div class="navbar__Logo">Navbar</div>
    <div class="navbar__Links">
      <router-link to="/">Home</router-link>
      <router-link to="/admin">Admin</router-link>
      <button @click="redirectToAuth">Login/Register</button>
      <div>Hello,</div>
      <button class="navbar__Links__Logout" @click="logout">Log out</button>
    </div>
  </div>
</template>

<script>
  import { AUTH } from "../composables/Links/links"
    export default {
      name: "Navbar",
      created(){
        this.getUser()
      },
      methods: {
        async getUser() {
          try {
          await this.$store.dispatch(AUTH)
        } catch (e) {
          console.log(e.message);
        }
        }
      },
      
    };
</script>

<style></style>
