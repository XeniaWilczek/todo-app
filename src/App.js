import "./App.css";
import { InputAndButton } from "./Components/InputAndButton";
import { ToDoList } from "./Components/ToDoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  function addNewTodo(newTodo) {
    const todo = {
      done: false,
      text: newTodo,
      id: Math.random(),
    };
    if (newTodo !== "") {
      setTodos([...todos, todo]);
    }
  }

  function clickCheckBox(todoId) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      }),
    );
  }

  function deleteToDo(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  return (
    <div className="to-do-app">
      <InputAndButton onAdd={addNewTodo}></InputAndButton>
      <ToDoList
        todos={todos}
        onCheck={clickCheckBox}
        onDelete={deleteToDo}
      ></ToDoList>
    </div>
  );
}

export default App;
