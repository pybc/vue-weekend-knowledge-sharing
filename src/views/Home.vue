<template>
  <div>
    <div>
      <h1 class="mb-2">Todolist</h1>
      <div class="input-todo">
        <v-text-field
          v-model="textInput"
          @keyup.enter="addTodo(textInput)"
        ></v-text-field>
        <button @click="addTodo(textInput)">
          <v-icon> mdi-plus </v-icon> Add
        </button>
      </div>
    </div>
    <v-card class="list-todo" v-for="item in listTodo" :key="item.id">
      <v-checkbox v-model="item.isDone"></v-checkbox>
      <span :class="[`display-text`, item.isDone ? `text-todo-done` : ``]">
        {{ item.text }}
      </span>
      <div class="btn">
        <!-- <button class="a" @click="item.isDone = !item.isDone">Done</button> -->
        <button @click="deleteTodo(item)">
          <v-icon>mdi-delete</v-icon>
        </button>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    textInput: "",
    listTodo: [],
    id: 0,
  }),
  methods: {
    addTodo(textInput) {
      if (textInput !== "") {
        this.listTodo.push({
          id: this.id,
          text: textInput,
          isDone: false,
        });
      }

      this.textInput = "";
      this.id++;
    },
    deleteTodo(item) {
      this.listTodo = this.listTodo.filter((element) => {
        return element.id !== item.id;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#todo-input {
  border-color: black;
}
.input-todo {
  width: 50%;
  display: flex;
  margin: auto;
}
.list-todo {
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 20px 20px;
  border-radius: 12px;
  margin-top: 10px;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
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
