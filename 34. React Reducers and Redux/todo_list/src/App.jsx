import { useReducer, useState } from "react";
import AddTodo from "./components/Add Todo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import TodoContext from "./context/TodoContext.js";
import TodoDispatchContext from "./context/TodoDispatchContext.js";
import todoReducers from "./reducers/todoReducers.js";

function App() {
  // const [list, setList] = useState([
  //   { id: 1, todoData: "todo 1", isFinished: false },
  //   { id: 2, todoData: "todo 2", isFinished: true },
  // ]);

  const [list, dispatch] = useReducer(todoReducers, []);

  return (
    <TodoContext.Provider value={{ list }}>
      <TodoDispatchContext.Provider value={{ dispatch }}>
        <div style={{ margin: "1rem 0" }}>
          {/* <AddTodo
          updateList={(todo) =>
            setList([
              ...list,
              { id: list.length + 1, todoData: todo, isFinished: false },
            ])
          }
        /> */}
          {/* <AddTodo
            updateList={(todo) => {
              dispatch({ type: "add_todo", payload: { todoText: todo } });
            }}
          /> */} 

          <AddTodo />
        </div>
        <TodoList />
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export default App;
