<template>
  <div class="home">
    <div>Todolist</div>
    <input type="text" @keyup.enter="addTodo(textInput)" v-model="textInput" />
    <button @click="addTodo(textInput)">Add</button>
  </div>
  <div class="list-todo" v-for="item in listTodo" :key="item.id">
    <span :class="[item.isDone ? `text-todo-done` : ``]">
      {{ item.text }}
    </span>
    <div class="btn">
      <button @click="item.isDone = !item.isDone">Done</button>
      <button @click="deleteTodo(item)">delete</button>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "Home",
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
    },
    deleteTodo(item) {
      this.listTodo = this.listTodo.filter((element) => {
        return element.id !== item.id;
      });
      console.log("listTodo", this.listTodo);
    },
  },
};
</script>
<style scoped>
.list-todo {
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 20px 200px;
  border-radius: 12px;
  background-color: pink;
  margin-top: 10px;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
}
.text-todo-done {
  text-decoration-line: line-through;
}
.btn button {
  margin: 0px 5px;
}
</style>
