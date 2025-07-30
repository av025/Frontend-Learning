import { useContext, useState } from "react"
import TodoDispatchContext from "../../context/TodoDispatchContext";
import { useDispatch } from "react-redux";
import { todoAdd } from "../../actions/todoActions";

export default function AddTodo({add}) {
    const [inputText , setInputText] = useState(""); 
   //  const {dispatch} = useContext(TodoDispatchContext); 
   // const dispatch = useDispatch(); 
   //? Here we are use useDispatch hook which help to create dispatch method to create dispatch method. 

    return <div>
        <input type="text" placeholder="Add your Todo here..."  
         value={inputText}  onChange={(e) => {
            setInputText(e.target.value)
         }}  />
         <button onClick={() => {
            // dispatch(todoAdd(inputText)); 
            add({todoText :inputText}); 
            // Here we have to pass payload manually because in redux-toolkit it takes our payload direct value inputText
            setInputText("")
         }}>Add Todo</button>
    </div>
} 


