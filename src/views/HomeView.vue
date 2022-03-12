<template>
  <div class="home">
    <b-col class="d-flex justify-content-center">
      <b-row>
        <b-form-input
          v-model="textInput"
          placeholder="Input your todo"
          class="input-todo"
          @keydown.enter="addTodo(textInput)"
        ></b-form-input>
        <b-button variant="success" class="ml-1" @click="addTodo(textInput)"
          >Add</b-button
        >
      </b-row>
    </b-col>
    <div>
      <b-col v-for="item in listTodo" :key="item.id" class="card-todo">
        <b-card class="my-2">
          <b-row class="justify-content-between align-items-center px-5">
            <b-form-checkbox v-model="item.isDone"></b-form-checkbox>
            <div
              :class="[
                item.isDone ? `text-todo-done display-text` : `display-text`,
              ]"
            >
              {{ item.text }}
            </div>
            <b-button variant="danger" @click="deleteTodo(item)">
              Delete
            </b-button>
          </b-row>
        </b-card>
      </b-col>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",

  data() {
    return {
      textInput: "",
      listTodo: [],
      id: 0,
    };
  },
  methods: {
    addTodo(textInput) {
      this.listTodo.push({
        id: this.id,
        text: textInput,
        isDone: false,
      });
      this.id++;
      this.textInput = "";
    },
    deleteTodo(item) {
      this.listTodo = this.listTodo.filter((element) => {
        return element.id !== item.id;
      });
    },
    onCheck(isCheck) {
      console.log("isCheck", isCheck);
    },
  },
};
</script>

<style lang="scss" scoped>
.input-todo {
  width: 300px;
}
.card-todo {
  .display-text {
    text-align: left;
    width: 70%;
    overflow-wrap: break-word;
  }
}
.text-todo-done {
  text-decoration-line: line-through;
}
</style>
