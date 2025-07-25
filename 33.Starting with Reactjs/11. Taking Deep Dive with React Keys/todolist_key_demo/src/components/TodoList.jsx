import { memo } from "react";
import TodoItem from "./TodoItem";

function TodoList({listOfTodos}) {


    return <ul>
        {listOfTodos?.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />
            //! Here we have to understand that items having the same key prop across re-renders are un-mounted from the UI They reamin same just mounted new item but re-renders every time 

            //? Myth : Key prop doesn't stop any re-renders 
        })}
    </ul>
}

export default memo(TodoList);  
//? Here we using memo() function which was higher order component which return memoised react component. 

