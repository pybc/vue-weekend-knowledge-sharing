<template>
  <div>{{ animeList }}</div>
</template>

<script>
export default {
  name: "cardAnime",
  data: () => ({
    animeList: "s",
  }),
  computed: {
    animeList() {
      return this.$store.state.animeList;
    },
  },
};
</script>

<style></style>
