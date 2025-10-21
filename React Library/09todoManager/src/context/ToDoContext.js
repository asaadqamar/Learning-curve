import { createContext, useContext } from "react";

export const ToDoContext = createContext({
  todos: [{ id: 1, todo: "todomessage", completed: false }],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleTodo: (id, todo) => {},
});

export const useTodo = () => {
  return useContext(ToDoContext);
};

export const TodoProvider = ToDoContext.Provider;
