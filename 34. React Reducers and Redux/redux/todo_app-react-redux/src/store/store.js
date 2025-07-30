import {combineReducers, createStore} from "redux"
// import todoReducer from "../reducers/todoReducer";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slice/todoSlice";

const reducers = combineReducers({todo : todoReducer}); 

// const store = createStore(reducers); 

const store = configureStore({
    reducer: {

        todo: todoReducer
    }, 
    // Enabling the DevTools for our project  
    devTools: process.env.NODE_ENV !== "production"
})

export default store; 