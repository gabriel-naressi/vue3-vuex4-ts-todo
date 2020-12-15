import { Todo } from "@/types/Todo";
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

export interface State {
  time: Date;
  todos: Todo[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  strict: process.env.NODE_ENV !== "production",
  //Actions aways commit and trigger a mutation. Actions are functions that cause side effects and can involve asynchronous
  //operations.
  actions: {
    //Operação assíncrona
    tick({ commit }) {
      setInterval(() => { commit("tick")}, 1000);
    },
    addTodo({ commit }, todo: Todo) {
      commit("addTodo", todo);
    },
    deleteTodo({ commit }, todo: Todo) {
      commit("deleteTodo", todo);
    }
  },
  state: {
    time: new Date(),
    todos: []
  },
  /*
    Mutations are operations that actually mutate the state. each mutation handler gets the entire state tree as the
    first argument, followed by additional payload arguments. mutations must be synchronous and can be recorded by plugins
    for debugging purposes.
  */
  mutations: {
    tick(state) {
      state.time = new Date();
    },
    addTodo(state, todo: Todo) {
      state.todos.push(todo);
    },
    deleteTodo(state, todo: Todo) {
      state.todos.splice(state.todos.findIndex(todo => todo.id), 1);
    }
  },
  getters: {
    getClock(state): string {
      return `
        ${state.time.toDateString()}
        ${state.time.getHours()}:${state.time.getMinutes()}:${state.time.getSeconds()}
      `;
    },
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
