import Vue from "vue";
import VueRouter from "vue-router";
import Background from "../views/Background.vue";
// import Portfolio from "../views/Portfolio.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Background",
    component: Background
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: Portfolio

    component: () =>
      import("../views/Portfolio.vue")
  },
  {
    path: "/blog",
    name: "Blog",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Blog.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
