import { createRouter, createWebHistory } from "vue-router";
import store from "../store/";
import { AUTH } from "../composables/Links/links";

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
  {
    path: "/:title/:text/:id/todo-changer",
    name: "Todo Changer",
    component: () => import("../views/TodoChanger.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

// Navigation Guard

let user = null;

async function getUser() {
  try {
    await store.dispatch(AUTH);
    user = store.state.auth.user;
  } catch {
    user = null;
  }
}

router.beforeEach(async (to) => {
  await getUser();
  if (to.name === "Todo" && !Boolean(user)) {
    return { name: "Auth" };
  } else if (to.name === "Auth" && Boolean(user)) {
    return { name: "Home" };
  } else if (to.name === "Admin" && !user.admin) {
    return { name: "Home" };
  } else if(to.name === "Todo Changer" && !user.admin) {
    return { name: "Home" }
  }
});

export default router;
