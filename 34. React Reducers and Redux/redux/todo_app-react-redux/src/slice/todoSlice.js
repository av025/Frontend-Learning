import { createSlice } from "@reduxjs/toolkit";
// First we create our initial State
const initialState = {
  todoList: [],
};

//* This createSlice function takes argument as an object
const todoSlice = createSlice({
  name: "todo",
  initialState,
  //! Here the ImerJS Help to directly update our State in this createSlice method so here we don't do manully all the work
  reducers: {
    addTodo: (todo, action) => {
      let todoText = action.payload.todoText;
      //* Now in core and redux-core we create new array than return but here we just update our todo our state
      todo.todoList.push({ id: Date.now(), text: todoText, isFinished: false });
    },

    updateTodo: (todo, action) => {
      let todoItem = action.payload.todoItem;
      let todoText = action.payload.todoText;
      todo.todoList = todo.todoList.map((t) => {
        if (t.id === todoItem.id) {
          t.text = todoText;
        }

        return t;
      });
    },

    finishedTodo: (todo, action) => {
      let todoItem = action.payload.todoItem;
      let isFinished = action.payload.isFinished;

      todo.todoList = todo.todoList.map((t) => {
        if (t.id === todoItem.id) {
          t.isFinished = isFinished;
        }

        return t;
      });
    },

    deleteTodo: (todo, action) => {
        
      let todoId = action.payload.todoId;

      todo.todoList = todo.todoList.filter((t) => t.id !== todoId);
    },
  },
});

export const {addTodo , updateTodo , deleteTodo , finishedTodo} = todoSlice.actions

export default todoSlice.reducer