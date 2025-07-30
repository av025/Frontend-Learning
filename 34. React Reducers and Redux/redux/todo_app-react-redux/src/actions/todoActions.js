import { ADD_TODO, DEL_TODO, STATUS, UPD_TODO } from "../constants/actionConstants";

export const todoFinished = (todoItem, isFinished) => {
  return {
    type: STATUS,
    payload: { todoItem, isFinished: isFinished },
  };
};

export const todoAdd = (inputText) => {
  return {
    type:ADD_TODO,
    payload: { inputText: inputText },
  };
};

export const todoDelete = (todoId) => {
  return {
    type: DEL_TODO,
    payload: { todoId },
  };
};

export const todoUpdate = (todoItem, todoText) => {
  return {
    type: UPD_TODO,
    payload: { todoItem, todoText },
  };
};
