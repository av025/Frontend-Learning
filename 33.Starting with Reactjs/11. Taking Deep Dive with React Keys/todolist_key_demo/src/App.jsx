import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([{ id: 1, value: "Do Homework" }]);

  function onTodoFormSubmit(value) {
    if (value) {
      setTodos([ ...todos, {id: todos.length + 1, value }]);
    }
  }

  return (
    <>
      <TodoInput onSubmit={onTodoFormSubmit} />
      <TodoList listOfTodos={todos} />
    </>
  );
}

export default App;
