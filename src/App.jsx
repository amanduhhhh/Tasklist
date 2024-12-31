import { useState } from "react";
import "./styles.css";
import { TodoForm } from "./TodoForm";
export default function App() {
  const [todolist, setTodolist] = useState([]);

  function addTask(title) {
    setTodolist((currentTodolist) => {
      return [
        ...currentTodolist,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }
  function toggleTodo(id, completed) {
    setTodolist((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodolist((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <TodoForm onSubmit={addTask} />
      <h1 className="header">my list</h1>
      {todolist.length === 0 && <p>nothing here yet...</p>}
      <ul className="list">
        {todolist.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
