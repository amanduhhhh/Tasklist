import { useContext } from "react";
import { listModContext } from "./App";

export function TodoItem({ completed, id, title }) {
  const [toggleTodo, deleteTodo] = useContext(listModContext);
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}
