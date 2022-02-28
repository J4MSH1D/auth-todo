<template>
  <div class="notFound">
      <div>404</div>
      <button @click="this.$router.go(-1)">Go Back</button>
  </div>
</template>

<script>
export default {
    name: "Not Found"
}
</script>