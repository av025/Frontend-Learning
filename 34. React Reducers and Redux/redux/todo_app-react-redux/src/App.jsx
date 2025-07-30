import { useReducer } from "react"
import AddTodo from "./components/AddTodo/AddTodo"
import TodoList from "./components/TodoList/TodoList"
import TodoContext from "./context/TodoContext"
import todoReducer from "./reducers/todoReducer"
import TodoDispatchContext from "./context/TodoDispatchContext"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { todoAdd, todoDelete, todoFinished, todoUpdate } from "./actions/todoActions"
import { addTodo, deleteTodo, finishedTodo, updateTodo } from "./slice/todoSlice"


function App() {  

const dispatch =   useDispatch(); 
// const actions = bindActionCreators({todoAdd ,todoDelete, todoFinished, todoUpdate  }, dispatch); 
const actions = bindActionCreators({addTodo, deleteTodo, finishedTodo, updateTodo}, dispatch); 

// const [list , dispatch] =  useReducer( todoReducer, [])

  return (
    // <TodoContext.Provider value={{list}}> 
    // <TodoDispatchContext.Provider value={{dispatch}}>
   <>
    <div style={{margin : "1rem 0"}}>
      <AddTodo add = {actions.addTodo}/>
    </div>
    <TodoList remove = {actions.deleteTodo} finished = {actions.finishedTodo} update = {actions.updateTodo} />
   </>
    // </TodoDispatchContext.Provider>
    // </TodoContext.Provider>
  )
}

export default App
