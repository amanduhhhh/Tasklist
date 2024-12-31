import { useState } from "react";

export function TodoForm({ onSubmit }) {
  const [newTask, setNewTask] = useState("hello");

  function handleSubmit(e) {
    e.preventDefault();
    if (newTask === "") return;
    onSubmit(newTask);
    setNewTask("");
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="for-row">
        <label htmlFor="item" className="centered">
          new task
        </label>
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">add!</button>
    </form>
  );
}
