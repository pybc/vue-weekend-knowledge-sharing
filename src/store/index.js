import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    animeList: [],
  },
  mutations: {
    setAnimeList(state, animeList) {
      state.animeList = animeList;
    },
  },
  actions: {
    async fetchAnimeList({ commit }, animeName) {
      const animeList = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${animeName}`
      );
      console.log("animeList:", animeList.data.data);
      commit("setAnimeList", animeList.data.data);
    },
  },
  getters: {
    getAnimeList(state) {
      return state.animeList;
    },
  },
  modules: {},
});
