
export function TodoItem({ id, title, completed, toggleTodo, deleteTodo }) {
  function handleChange(e) {
    toggleTodo(id, e.target.checked);
  }

  return (
    <li key={id}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={handleChange}
        />
        {title}
      </label>
      <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
}