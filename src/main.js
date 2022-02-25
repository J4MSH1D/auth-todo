import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3333/";

// VUEX
import store from "./store";

// Vue Router
import router from "./router";

// Styles
import "./scss/style.scss";

createApp(App).use(store).use(router).mount("#app");
