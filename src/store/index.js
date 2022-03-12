import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    animeList: [],
    userData: [],
  },
  getters: {
    getAnimeList(state) {
      return state.animeList;
    },
    getUserData(state) {
      return state.userData;
    },
  },
  mutations: {
    setAnimeList(state, animeList) {
      state.animeList = animeList;
    },
    setUserData(state, userData) {
      state.userData = userData;
    },
  },
  actions: {
    async fetchAnimeList({ commit }, animeName) {
      const animeList = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${animeName}`
      );
      console.log("animeList:", animeList);
      commit("setAnimeList", animeList.data.data);
    },
    async sendData({ commit }, userData) {
      commit("setUserData", userData);
    },
  },
});
