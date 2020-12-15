import { Todo } from "@/types/Todo";
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

export interface State {
  todos: Todo[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  //Actions aways commit and trigger a mutation. Actions are functions that cause side effects and can involve asynchronous
  //operations.
  actions: {
    addTodo({ commit }, todo: Todo) {
      commit("addTodo", todo);
    }
  },
  state: {
    todos: []
  },
  /*
    Mutations are operations that actually mutate the state. each mutation handler gets the entire state tree as the
    first argument, followed by additional payload arguments. mutations must be synchronous and can be recorded by plugins
    for debugging purposes.
  */
  mutations: {
    addTodo(state, todo: Todo) {
      state.todos.push(todo);
    }
  },
  getters: {
    getTodos(state): Todo[] {
      return state.todos;
    },
    todoCount(state): number {
      return state.todos.length;
    }
  }
});

export function useStore() {
  return baseUseStore(key);
}
