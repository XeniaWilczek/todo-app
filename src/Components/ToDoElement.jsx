import "./ToDoElement.css";

function ToDoElement({ done, text, id, onCheck, onDelete }) {
  return (
    <div className="to-do-element">
      <input
        type="checkbox"
        className="to-do-checkbox"
        checked={done}
        id={id}
        onChange={() => onCheck(id)}
      />
      <label htmlFor={id} className={`to-do-text ${done ? "is-done" : ""}`}>
        {text}
      </label>
      <button className="to-do-delete-button" onClick={() => onDelete(id)}>
        Löschen
      </button>
    </div>
  );
}

export { ToDoElement };
