import { createContext, useEffect, useState } from "react";
import "./styles.css";
import { TodoForm } from "./TodoForm";
import { Todolist } from "./Todolist";

export const listModContext = createContext();
export default function App() {
  const [todolist, setTodolist] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todolist));
  }),
    [todolist];

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
      <listModContext.Provider value={[toggleTodo, deleteTodo]}>
        <Todolist todolist={todolist} />
      </listModContext.Provider>
    </>
  );
}
