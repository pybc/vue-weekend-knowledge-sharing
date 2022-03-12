<template>
  <div class="mx-4">
    <h2>Anime list</h2>
    <b-row>
      <b-col>
        <b-form-input v-model="name"> </b-form-input>
      </b-col>
      <b-button variant="success" class="ml-1" @click="searchAnime"
        >Search</b-button
      >
    </b-row>
    <b-row v-if="animeList.length !== 0">
      <b-col v-for="anime in animeList" :key="anime.mal_id">
        <ItemCard
          :title="anime.title"
          :description="anime.synopsis"
          :image_url="anime.images.jpg.image_url"
          :url="anime.url"
        />
      </b-col>
    </b-row>
    <div v-else class="mt-2">Empty Data</div>
  </div>
</template>

<script>
import ItemCard from "../components/ItemCard.vue";
export default {
  data() {
    return {
      name: "",
    };
  },
  components: {
    ItemCard,
  },
  computed: {
    animeList() {
      return this.$store.getters.getAnimeList;
    },
  },
  methods: {
    searchAnime() {
      this.$store.dispatch("fetchAnimeList", this.name);
    },
  },
};
</script>

<style lang="scss" scoped></style>
