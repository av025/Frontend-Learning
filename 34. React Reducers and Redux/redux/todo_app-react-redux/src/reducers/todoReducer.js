import { ADD_TODO, DEL_TODO, STATUS, UPD_TODO } from "../constants/actionConstants";

function todoReducer(state = [], action) { 
   

    if(action.type === ADD_TODO) {
        let inputText  = action.payload.inputText; 

        return [
            ...state, {text:inputText, isFinished : false, id: Date.now()}
        ]
    }else if(action.type === DEL_TODO) {
        let todoId = action.payload.todoId; 

        const updateList = state.filter((todo) => todo.id !== todoId)  
        return updateList; 
    }else if(action.type === UPD_TODO) {
        let todoText = action.payload.todoText; 
        let todoItem = action.payload.todoItem; 
     
        const updateList = state.map((todo) => {
            if(todo.id === todoItem.id) {
                return {...todo, text: todoText}
            }
            return todo; 
        }); 

        return updateList; 
    }else if(action.type === STATUS) {
        let todoItem = action.payload.todoItem; 
         let isFinished = action.payload.isFinished; 

        const updateList = state.map((todo) => {
            if(todo.id === todoItem.id) {
                return {...todo, isFinished : isFinished}
            }

            return todo; 
        })

        return updateList; 
    }else {
        return state; 
    }

}

export default todoReducer; 