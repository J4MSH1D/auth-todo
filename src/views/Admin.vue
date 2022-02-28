<template>
  <Loading v-if="loading" />
  <div class="admin">
    <div class="buttonFields">
      <button class="buttonFields__buttons__active">Add Post</button>
      <button>List of Posts</button>
      <button>Users</button>
    </div>
    <AdminField v-if="forms.add" />
    <div class="todos" v-if="forms.posts">
      <div class="home__Title">List of todos</div>
      <div class="todos_list_for_admin" v-for="todo in todos" :key="todo.id">
        <div class="todos_list_for_admin__title">{{ todo.title }}</div>
        <div class="todos_list_for_admin__text">
          {{ todo.text }}
        </div>
        <button @click="redirectToChange(todo.title, todo.text, todo.id)">
          Edit
        </button>
        <button class="delete-btn" @click="deletePost(todo.id)">Delete</button>
      </div>
      <div v-if="empty">There no todos yet</div>
    </div>
  </div>
</template>

<script>
  import AdminField from "../components/AdminFileds.vue";
  import Loading from "../components/Loading.vue";
  import { TODO, TODOS_V } from "../composables/Links/links";
  import axios from "axios";
  export default {
    name: "Admin",
    data() {
      return {
        forms: {
          add: true,
          posts: false,
          users: false,
        },
        empty: true,
        loading: false,
      };
    },
    components: {
      AdminField,
      Loading,
    },
    created() {
      this.updates();
    },
    updated() {
      this.updates();
    },
    mounted() {
      const selectAll = (item) => document.querySelectorAll(item);
      selectAll(".buttonFields > button").forEach((item, index) => {
        item.addEventListener("click", () => {
          for (let i = 0; i < selectAll(".buttonFields > button").length; i++) {
            let key = Object.keys(this.forms)[i];
            this.forms[key] = false;
            selectAll(".buttonFields > button")[i].classList.remove(
              "buttonFields__buttons__active"
            );
          }
          let key = Object.keys(this.forms)[index];
          this.forms[key] = true;
          item.classList.add("buttonFields__buttons__active");
        });
      });
    },
    computed: {
      todos() {
        return this.$store.state.todos.todos;
      },
    },
    methods: {
      updates() {
        if (this.todos.length > 0) {
          this.empty = false;
        } else {
          this.empty = true;
        }
      },
      redirectToChange(title, text, id) {
        this.$router.push({
          name: "Todo Changer",
          params: {
            title: title,
            text: text,
            id: id,
          },
        });
      },
      async deletePost(id) {
        this.loading = true;
        try {
          await axios.delete(TODO(id));
          this.$store.dispatch(TODOS_V);
          this.loading = false;
        } catch (e) {
          this.loading = false;
          console.log(e.message);
        }
      },
    },
    watch: {
      todos() {
        if (this.todos.length > 0) {
          this.empty = false;
        } else {
          this.empty = true;
        }
      },
    },
  };
</script>
