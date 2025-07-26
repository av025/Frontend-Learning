
import { useCallback } from "react";
import TodoItem from "./TodoItem";

function TodoList({listOfTodos, onDeleteTodo}) {
  
    function onDelete(value) {  
        console.log("Delete Todo Item id ", value); 
        onDeleteTodo?.(value)

    } 

    const memoisedTodoDeleteCB = useCallback(onDelete , [onDeleteTodo]); 

    return <ul style={{margin: "2rem 0"}}>
        {listOfTodos?.map((todo, idx) => {
            return <TodoItem key={todo.value} todo={todo} onDelete={memoisedTodoDeleteCB} />
            //! Here we have to understand that items having the same key prop across re-renders are un-mounted from the UI They reamin same just mounted new item but re-renders every time 
            //! Index was also given as the key prop, but it's not considered a good practice because if we add items at the start of the list or sort the list, all the elements may get re-mounted. This happens because the key values no longer match their previous positions, which can lead to performance issues and unexpected behavior.

            //? Myth : Key prop doesn't stop any re-renders 
        })}
    </ul>
}

export default TodoList 


