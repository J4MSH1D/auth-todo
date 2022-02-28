<template>
  <Loading v-if="loading" />
  <div class="listOfUsers" v-if="admins && custom">
    <div class="listOfUsers__blocks">
      <div class="listOfUsers__blocks__Title">Admins</div>
      <div
        v-for="admin in admins"
        :key="admin.id"
        class="listOfUsers__blocks__userData"
      >
        <input
          type="checkbox"
          v-model="admin.admin"
          :id="admin.email"
          @click="changeStatus(admin.id, admin.admin)"
        />
        <label :for="admin.email">
          {{ admin.email }}
        </label>
      </div>
      <div v-if="adminList">There no admins</div>
    </div>
    <div class="listOfUsers__blocks">
      <div class="listOfUsers__blocks__Title">Custom Users</div>
      <div
        v-for="user in custom"
        :key="user.id"
        class="listOfUsers__blocks__userData"
      >
        <input
          type="checkbox"
          v-model="user.admin"
          :id="user.email"
          @click="changeStatus(user.id, user.admin)"
        />
        <label :for="user.email">
          {{ user.email }}
        </label>
      </div>
      <div v-if="customList">There no users</div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import Loading from "../components/Loading.vue";
  import { USER } from "../composables/Links/links";
  export default {
    name: "List Of Users",
    data() {
      return {
        adminList: false,
        customList: false,
        loading: false,
      };
    },
    computed: {
      admins() {
        return this.$store.getters.admins;
      },
      custom() {
        return this.$store.getters.custom;
      },
    },
    created() {
      this.adminChecker();
      this.customChecker();
    },
    updated() {
      this.adminChecker();
      this.customChecker();
    },
    watch: {
      admins() {
        this.adminChecker();
      },
      custom() {
        this.customChecker();
      },
    },
    components: {
      Loading,
    },
    methods: {
      adminChecker() {
        if (this.admins && this.admins.length > 0) {
          this.adminList = false;
        } else {
          this.adminList = true;
        }
      },
      customChecker() {
        if (this.custom && this.custom.length > 0) {
          this.customList = false;
        } else {
          this.customList = true;
        }
      },
      async changeStatus(id, admined) {
        this.loading = true;
        try {
          await axios.patch(USER(id), { admin: !admined });
          this.loading = false;
        } catch (e) {
          this.loading = false;
          console.log(e.message);
        }
        console.log(id);
      },
    },
  };
</script>
