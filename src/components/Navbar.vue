<template>
  <div class="navbar">
    <div class="navbar__Container">
      <div class="navbar__Logo">Navbar</div>
      <div class="navbar__Links">
        <router-link to="/">Home</router-link>
        <router-link to="/admin" v-if="admin">Admin</router-link>
        <button @click="redirectToAuth" v-if="!user">Login/Register</button>
        <div v-if="user">Hello, {{ user.email }}</div>
        <button class="navbar__Links__Logout" @click="logout" v-if="user">
          Log out
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Navbar",
    data() {
      return {
        admin: null,
      };
    },
    methods: {
      async logout() {
        try {
          localStorage.removeItem("jwt");
          this.admin = null;
          this.$router.push({ name: "Auth" });
        } catch (e) {
          console.log(e.message);
        }
      },
      redirectToAuth() {
        this.$router.push({ name: "Auth" });
      },
    },
    computed: {
      user() {
        return this.$store.state.auth.user;
      },
    },
    watch: {
      user() {
        if (this.user && this.user.admin) {
          this.admin = true;
        } else {
          return null;
        }
      },
    },
  };
</script>

<style></style>
