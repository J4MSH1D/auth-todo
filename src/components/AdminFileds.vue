<template>
  <Loading v-if="loading" />
  <div class="admin__Fields">
    <div class="admin__Fileds__Title">Admin</div>
    <div class="admin__Fileds__Title__label">
      <div>
        <input type="text" id="title" v-model="title" placeholder="Title" />
      </div>
    </div>
    <div class="admin__Fileds__Title__label">
      <div>
        <textarea
          id="title"
          cols="50"
          rows="5"
          v-model="text"
          placeholder="Text"
        ></textarea>
      </div>
    </div>
    <div class="error" v-if="error">Your data is incorrect</div>
    <div class="admin__Fields__button">
      <button @click="submit" class="submit">Submit</button>
      <button class="clear" @click="clear">Clear</button>
    </div>
  </div>
</template>

<script>
  import { admin } from "../mixins/Admin/admin";
  export default {
    name: "Admin Filed",
    mixins: [admin],
  };
</script>

<style></style>
