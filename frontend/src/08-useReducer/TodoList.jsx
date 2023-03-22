import { TodoItem } from "./TodoItem";

export const TodoList = ( { todos = [], handleRemoveTodo, handleToggleTodo} ) => {
  return (
    <ul className="list-group">

      { todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} handleRemoveTodo = { handleRemoveTodo } handleToggleTodo= { handleToggleTodo }/>
      ))}
    </ul>
  );
};
