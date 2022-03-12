import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AnimeView from "../views/AnimeView.vue";
import EventView from "../views/EventView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/anime",
    name: "animeView",
    component: AnimeView,
  },
  {
    path: "/event",
    name: "eventView",
    component: EventView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
