export const TodoItem = ({ todo, handleRemoveTodo, handleToggleTodo }) => {
  const { description, id, done } = { ...todo };
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        onClick={() => handleToggleTodo(id)}
        className={`align-self-center ${
          done ? "text-decoration-line-through" : ""
        }`}
      >
        {description}{" "}
      </span>
      <button className="btn btn-danger" onClick={() => handleRemoveTodo(id)}>
        Borrar
      </button>
    </li>
  );
};
