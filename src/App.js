import "./App.css";
import { InputAndButton } from "./Components/InputAndButton";
import { ToDoList } from "./Components/ToDoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  function addNewTodo(newTodo) {
    if (newTodo.trim() !== "") {
      const todo = {
        done: false,
        text: newTodo,
        id: crypto.randomUUID(),
      };
      setTodos([...todos, todo]);
    }
  }

  function handleCheckboxClick(todoId) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      }),
    );
  }

  function handleDeleteClick(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  return (
    <div className="to-do-app">
      <InputAndButton onAdd={addNewTodo}></InputAndButton>
      <ToDoList
        todos={todos}
        onCheck={handleCheckboxClick}
        onDelete={handleDeleteClick}
      ></ToDoList>
    </div>
  );
}

export default App;
