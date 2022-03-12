<template>
  <div class="px-5 input-data mx-auto">
    <b-form-input
      v-model="user.name"
      placeholder="name"
      class="mt-2"
    ></b-form-input>
    <b-form-input
      v-model="user.firstName"
      placeholder="firstname"
      class="mt-2"
    ></b-form-input>
    <b-form-input
      v-model="user.lastName"
      placeholder="lastname"
      class="mt-2"
    ></b-form-input>
    <b-form-input
      v-model="user.studentId"
      placeholder="studentId"
      class="mt-2"
    ></b-form-input>
    <b-button @click="sendUserData" class="mt-4"> Submit </b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        firstName: "",
        lastName: "",
        studentId: "",
      },
    };
  },
  methods: {
    sendUserData() {
      this.$store.dispatch("sendData", this.user);
    },
  },
};
</script>

<style lang="scss" scoped>
.input-data {
  width: 500px;
}
</style>
