import { ToDoElement } from "./ToDoElement";
import "./ToDoList.css";

function ToDoList({ todos, onCheck, onDelete }) {
  if (todos.length === 0) {
    return <p className="to-do-list-text">keine ToDos</p>;
  }

  return (
    <div className="to-do-list">
      {todos.map((todo) => (
        <ToDoElement
          key={todo.id}
          done={todo.done}
          text={todo.text}
          id={todo.id}
          onCheck={onCheck}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export { ToDoList };
