<template>
  <ul>
    <p>Seu total de tarefas é: {{ todoCount }}</p>
    <li v-for="todo in todos" :key="todo.id">{{ todo }}</li>
  </ul>
</template>
<script lang="ts">
import { Todo } from "@/types/Todo";
import { useStore } from "../store";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    return {
      todos: computed(() => store.getters.getTodos),
      todoCount: computed(() => store.getters.todoCount)
    };
  }
};
</script>
