import { useState } from "react";
import "./styles.css"
export default function App(){
  const [newTask, setNewTask] = useState("hello");
  function handleSubmit(e){
    e.preventDefault();
  }
  return (
  <>
    <form onSubmit={handleSubmit} className = "new-item-form">
      <div className = "for-row">
        <label htmlFor="item" className="centered">new task</label>
        <input value={newTask} onChange={(e)=>setNewTask(e.target.value)} type="text" id="item" />
      </div>
      <button className="btn">add!</button>
      
    </form>
    <h1 className="header">my list</h1>
    <ul className="list">
      <li>
        <label><input type="checkbox" />Item 1</label>
        <button className = "btn btn-danger">Delete</button>
      </li>
    </ul>
  </>
  );
}
