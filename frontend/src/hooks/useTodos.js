import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodos = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("todos") || []);
  };

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleRemoveTodo = (todoId) => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: todoId,
    };

    dispatch(action);
  };

  const handleToggleTodo = (todoId) => {
    console.log("handleToggleTodo", todoId);

    const action = {
      type: "[TODO] Toggle Todo",
      payload: todoId,
    };

    dispatch(action);
  };


  return {
    todos,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done ).length
  };
};
