<template>
  <div class="list">
    <div class="list__Title">{{ title }}</div>
    <div class="list__Text">{{ text }}</div>
    <div>
      <button @click="redirect">Learn More</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "List Of Todos",
    props: {
      title: String,
      text: String,
    },
    methods: {
      redirect() {
        this.$router.push({
          name: "Todo",
          params: { id: this.title, text: this.text },
        });
      },
    },
  };
</script>
