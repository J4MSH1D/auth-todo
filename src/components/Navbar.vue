<template>
  <div class="navbar">
    <div class="navbar__Logo">Navbar</div>
    <div class="navbar__Links">
      <router-link to="/">Home</router-link>
      <router-link to="/admin" v-if="admin">Admin</router-link>
      <button @click="redirectToAuth"  v-if="!email">Login/Register</button>
      <div v-if="email">Hello, {{ email }}</div>
      <button class="navbar__Links__Logout" @click="logout" v-if="email">Log out</button>
    </div>
  </div>
</template>

<script>
import { AUTH } from "../composables/Links/links";
export default {
  name: "Navbar",
  data(){
    return {
      email: null,
      admin: null
    }
  },
  created() {
    this.getUser();
  },
  updated(){
    this.getUser();
  },
  methods: {
    async getUser() {
      try {
        await this.$store.dispatch(AUTH);
        this.email = this.$store.state.auth.user.email;
        this.admin = this.$store.state.auth.user.admin;
      } catch (e) {
        console.log(e.message);
      }
    },
    async logout(){
      try {
        localStorage.removeItem("jwt");
        await this.getUser()
        this.email = this.admin = null
        this.$router.push({name: "Auth"})
      } catch (e) {
        console.log(e.message);
      }
    },
    redirectToAuth(){
      this.$router.push({name: "Auth"})
    }
  },
  beforeUnmount(){
    this.getUser()
  }
};
</script>

<style></style>
