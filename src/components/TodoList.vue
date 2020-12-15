<template>
  <ul>
    <p>Seu total de tarefas é: {{ todoCount }}</p>
    <li v-for="todo in todos" :key="todo.id">{{ todo }}</li>
  </ul>
</template>
<script lang="ts">
import { useStore } from "../store";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    return {
      //Poderia também ser: computed(() => store.state.todos), qual a diferença?
      todos: computed(() => store.getters.getTodos),
      todoCount: computed(() => store.getters.todoCount)
      //Poderia ter dispatchs aqui, sem problemas: increment: () => store.dispatch('increment'),
    };
  }
};
</script>
