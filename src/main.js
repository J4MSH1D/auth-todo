import { createApp } from 'vue'
import App from './App.vue'


// VUEX
import store from "./store"


// Vue Router
import router from "./router"

createApp(App).use(store).use(router).mount('#app')
