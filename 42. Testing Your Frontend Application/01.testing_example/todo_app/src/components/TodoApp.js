import React, {useState} from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const TodoApp = () => {
    const [todos, setTodos] = useState([]); 

    const addTodo = (todo) => {
        setTodos([...todos, {id:Date.now(), text:todo , completed : false}])

    }

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) => todo.id === id ? {...todo, completed : !todo.completed} : todo
            )
        )
    }

    return <div>
        <h1>Todo App</h1> 
        <AddTodo  addTodo={addTodo}/>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
}; 

export default TodoApp; 