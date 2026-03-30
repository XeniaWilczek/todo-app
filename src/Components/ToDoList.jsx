import { ToDoElement } from "./ToDoElement";
import "./ToDoList.css";

function ToDoList({ todos, onCheck, onDelete }) {
  return (
    <div className="to-do-list">
      {todos.length === 0 ? (
        <p className="to-do-list-text">keine ToDos</p>
      ) : (
        todos.map((todo) => (
          <ToDoElement
            key={todo.id}
            done={todo.done}
            text={todo.text}
            id={todo.id}
            onCheck={onCheck}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export { ToDoList };
