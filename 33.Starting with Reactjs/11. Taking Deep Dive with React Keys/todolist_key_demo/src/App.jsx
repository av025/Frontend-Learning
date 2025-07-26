import { useCallback, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Sample from "./components/Sample";

function App() {
  const [todos, setTodos] = useState([{  value: "Do Homework" }]); 

  function deleteTodoById(value){ 

    setTodos(todos.filter(todo => todo.value !== value))

  } 

  const memoisedDeleteTodoByIdCB = useCallback(deleteTodoById, [todos])

  function onTodoFormSubmit(value) {
    if (value) {
      setTodos([ ...todos, { value }]);
    }
  }

  return (
    <>
      <TodoInput onSubmit={onTodoFormSubmit} />
      <TodoList listOfTodos={todos} onDeleteTodo={memoisedDeleteTodoByIdCB} /> 
    </>
  );
}

export default App;
