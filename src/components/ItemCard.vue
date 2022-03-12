<template>
  <div>
    <b-card
      :title="title"
      :img-src="image_url"
      img-alt="Image"
      img-top
      tag="article"
      style="width: 20rem; height: 50rem"
      class="my-2"
    >
      <b-card-text class="description">
        {{ description }}
      </b-card-text>

      <b-button :href="url" variant="primary">Detail</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["title", "image_url", "description", "url"],
};
</script>

<style lang="scss" scoped>
.description {
  text-align: left;
  height: 100px;
  overflow: hidden;
}
</style>
