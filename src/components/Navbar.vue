<template>
  <div class="navbar">
      <div class="navbar__Logo">Navbar</div>
      <div class="navbar__Links">
          <router-link to="/">Home</router-link>
          <router-link to="/">Profile</router-link>
          <router-link to="/">Login</router-link>
          <router-link to="/">Register</router-link>
      </div>
  </div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style>

</style>