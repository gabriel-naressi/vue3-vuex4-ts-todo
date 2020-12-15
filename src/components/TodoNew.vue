<template>
  <input type="text" placeholder="Enter a new task" @keyup.enter="addTodo" />
</template>
<script lang="ts">
import { Todo } from "@/types/Todo";
import { store, useStore } from "../store";

export default {
  setup() {
    const store = useStore();
    let id = 0;
    return {
      addTodo: (e: any): void => {
        const todo = new Todo(id, e.target.value);
        //Dispatch to action addTodo
        store.dispatch("addTodo", todo);
        id++;
      },
    };
  },
};
</script>
