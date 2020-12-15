<template>
  <div>
    <p>Relógio:{{ getClock }}</p>
    <ul>
      <p>Seu total de tarefas é: {{ todoCount }}</p>
      <li v-for="todo in todos" :key="todo.id">
        Tarefa {{todo.id}}: {{ todo.task }}
        <button @click="deleteTodo(todo)">X</button>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { useStore } from "../store";
import { computed } from "vue";
export default {
  created() {
    const store = useStore();
    store.dispatch("tick");
  },
  setup() {
    const store = useStore();
    return {
      //Poderia também ser: computed(() => store.state.todos), qual a diferença?
      todos: computed(() => store.getters.getTodos),
      todoCount: computed(() => store.getters.todoCount),
      getClock: computed(() => store.getters.getClock),
      deleteTodo: () => store.dispatch("deleteTodo")
      //Poderia ter dispatchs aqui, sem problemas: increment: () => store.dispatch('increment'),
    };
  }
};
</script>
