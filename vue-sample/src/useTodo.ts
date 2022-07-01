import { InjectionKey, ref } from "vue";

export interface Todo {
  id: number;
  title: string;
}

const dafaultTodos = [
  { id: 0, title: "first" },
  { id: 1, title: "second" },
];

export const todos = (() => {
  const todos = ref<Todo[]>(dafaultTodos);
  const addTodo = (title: string): void => {
    const newTodo: Todo = {
      id: Math.random(),
      title,
    };
    todos.value.push(newTodo);
  };
  return { todos, addTodo };
})();

type TodoType = typeof todos;
export const todoKey: InjectionKey<TodoType> = Symbol("useTodos");
