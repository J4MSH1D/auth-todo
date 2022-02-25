<template>
  <div class="navbar">
    <div class="navbar__Logo">Navbar</div>
    <div class="navbar__Links">
      <router-link to="/">Home</router-link>
      <router-link to="/">Profile</router-link>
      <button @click="redirectToAuth">Login/Register</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Navbar",
    methods: {
      redirectToAuth() {
        this.$router.push({ name: "Auth" });
      },
    },
  };
</script>

<style></style>
