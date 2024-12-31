import { TodoItem } from "./TodoItem";

export function Todolist({ todolist }) {
  return (
    <ul className="list">
      {todolist.map((todo) => {
        return <TodoItem {...todo} key={todo.id} />;
      })}
    </ul>
  );
}
