import React, {useState} from "react"; 

function AddTodo({addTodo}) {
    const [todo, setTodo] = useState(""); 
  
    const handleSubmit = function (e) {
       e.preventDefault(); 
       if(todo.trim()) {
        addTodo(todo); 
        setTodo("")
       }
    }

    return <form onSubmit={handleSubmit}>
     <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Add a new Todo" />
      <button type="submit">Add Todo</button>
    </form>
}

export default AddTodo;