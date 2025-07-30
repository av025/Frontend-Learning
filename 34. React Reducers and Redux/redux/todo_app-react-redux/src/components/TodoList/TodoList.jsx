import { useContext } from "react";
import TodoContext from "../../context/TodoContext";
import TodoDispatchContext from "../../context/TodoDispatchContext";
import Todo from "../Todo/Todo";
import { useDispatch, useSelector } from "react-redux";
import { todoDelete, todoFinished, todoUpdate } from "../../actions/todoActions";

function TodoList({ update, finished, remove }) {
  // const { list } = useContext(TodoContext);
  // const { dispatch } = useContext(TodoDispatchContext); 

  const dispatch = useDispatch(); 
  
 const list =  useSelector( state => state.todo)
 //? This useSelector hook help to get the state of our redux store to component 


  function onFinished(todoItem, isFinished) {
    // dispatch(todoFinished(todoItem, isFinished)); 
    finished(todoItem, isFinished); 
  }

  function deleteTodo(todoId) {
    // dispatch(todoDelete(todoId)); 
    remove(todoId); 
  }

  function updateTodo(todoItem, todoText) {
    // dispatch(todoUpdate(todoItem, todoText));
    update(todoItem, todoText)
  } 


  return (
    <div>
      {list.length > 0 &&
        list.map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              isFinished={todo.isFinished}
              todoData={todo.text}
              changeFinished={() => onFinished(todo, todo.isFinished)}
              onDelete={() => {
                deleteTodo(todo.id);
              }}
              onUpdate={(todoText) => {
                updateTodo(todo, todoText);
              }}
            />
          );
        })}
    </div>
  );
}

export default TodoList;
