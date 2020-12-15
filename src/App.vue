<template>
  <div>
    <h1>Todo list</h1>
    <div>
      <TodoNew />
      <TodoList />
    </div>
  </div>
</template>
<script lang="ts">
import TodoNew from "@/components/TodoNew.vue";
import TodoList from "@/components/TodoList.vue";
export default {
  components: {
    TodoNew,
    TodoList
  }
};
</script>
