import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("../views/Authorization.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/Admin.vue"),
  },
  {
    path: "/:id/:text/todo",
    name: "Todo",
    component: () => import("../views/Todo.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0};
  },
});


router.beforeEach((to) => {
  if(to.name === "Todo") {
    return { name: "Auth"} 
  }
})


export default router;
