import { useReducer } from "react"
import AddTodo from "./components/AddTodo/AddTodo"
import TodoList from "./components/TodoList/TodoList"
import TodoContext from "./context/TodoContext"
import todoReducer from "./reducers/todoReducer"
import TodoDispatchContext from "./context/TodoDispatchContext"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { todoAdd, todoDelete, todoFinished, todoUpdate } from "./actions/todoActions"


function App() {  

const dispatch =   useDispatch(); 
const actions = bindActionCreators({todoAdd ,todoDelete, todoFinished, todoUpdate  }, dispatch); 

// const [list , dispatch] =  useReducer( todoReducer, [])

  return (
    // <TodoContext.Provider value={{list}}> 
    // <TodoDispatchContext.Provider value={{dispatch}}>
   <>
    <div style={{margin : "1rem 0"}}>
      <AddTodo add = {actions.todoAdd}/>
    </div>
    <TodoList remove = {actions.todoDelete} finished = {actions.todoFinished} update = {actions.todoUpdate} />
   </>
    // </TodoDispatchContext.Provider>
    // </TodoContext.Provider>
  )
}

export default App
