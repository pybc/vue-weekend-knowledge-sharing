<template>
  <div>
    <h2>Anime list</h2>
    <v-text-field v-model="name" @keyup.enter="fetchData(name)"></v-text-field>
    <section class="list" v-if="animeList.length !== 0">
      <div v-for="anime in animeList" :key="anime.mal_id">
        <div class="card">
          <h2 class="text-h5 title">
            {{ anime.title || "empty title" }}
          </h2>
          <img
            width="150"
            class="mx-auto"
            :src="anime.images.jpg.image_url"
            alt=""
          />
          <h4 class="description">{{ anime.synopsis || "empty synopsis" }}</h4>
          <div>
            <v-btn outlined rounded text>
              <a :href="anime.url">Click</a>
            </v-btn>
          </div>
        </div>
      </div>
    </section>
    <section v-else>
      <div>Empty</div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AnimeList",
  data: () => ({
    name: "",
  }),
  computed: {
    animeList() {
      return this.$store.getters.getAnimeList;
    },
  },
  methods: {
    fetchData(name) {
      this.$store.dispatch("fetchAnimeList", name);
    },
  },
};
</script>

<style lang="scss">
.list {
  display: grid;
  gap: 50px;
  grid-template-columns: auto auto auto;
  padding: 10px;
}
.card {
  width: 500px;
  min-height: max-content;
  height: 450px;
  background-color: white;
  border: 1px solid black;
  margin: 20px 10px;
  padding: 20px 20px;
  .title {
    margin-bottom: 20px;
  }
  .description {
    text-align: left;
    margin-top: 20px;
    line-height: 2.5ex;
    height: 7.5ex; /* 2.5ex for each visible line */
    overflow: hidden;
  }
}
</style>
