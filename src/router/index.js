import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AnimeList from "../views/AnimeList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/anime-list",
    name: "AnimeList",
    component: AnimeList,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
