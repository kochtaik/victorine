import { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { preventForUnauthenticated, preventForAuthenticated } from "./guards";
export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      layout: 'AppLayoutDefault',
      forNonAuthenticated: false,
    },
    beforeEnter: preventForUnauthenticated,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: {
      layout: 'AppLayoutDefault',
      forNonAuthenticated: false,
    },
    beforeEnter: preventForUnauthenticated,
  },
  {
    path: "/auth/:action",
    name: "auth",
    component: () => 
      import(/* webpackChunkName: "auth" */ "../views/AuthView.vue"),
    meta: {
      layout: 'AppLayoutDefault',
      forNonAuthenticated: true,
    },
    beforeEnter: preventForAuthenticated,
  }
];
