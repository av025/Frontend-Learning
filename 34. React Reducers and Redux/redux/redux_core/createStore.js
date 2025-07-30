const { createStore, bindActionCreators, combineReducers } = require("redux");
//* Now this createStore function also use to do State Management in our application like in react we do with context API , useState and useReducer.

const ADD_TODO = "add_todo";
const DELETE_TODO = "delete_todo";
const UPDATE_TODO = "edit_todo";
const ADD_USER = "add_user";

//* todo Reducer Func
function todoReducer(state = [], action) {
  if (action.type === ADD_TODO) {
    const todoText = action.payload.todoText;

    return [
      ...state,
      {
        text: todoText,
        isFinished: false,
        id: state.length === 0 ? 1 : state[state.length - 1].id + 1,
      },
    ];
  } else if (action.type === DELETE_TODO) {
    const todoId = action.payload.todoId;
    return state.filter((t) => t.id !== todoId);
  } else if (action.type === UPDATE_TODO) {
    const todo = action.payload.todo;
    const todoText = action.payload.todoText;

    return state.map((t) => {
      if (t.id === todo.id) {
        t.text = todoText;
      }

      return t;
    });
  }

  return state;
}

//* User Reducer Func
function userReducer(state = [], action) {
  if (action.type === ADD_USER) {
    let userName = action.payload.userName;

    return [
      ...state,
      {
        name: userName,
        isFinished: false,
        id: state.length === 0 ? 1 : state[state.length - 1].id + 1,
      },
    ];
  } 

  return state; 
}

const combinedReducers = combineReducers({todo:todoReducer, users:userReducer} )

//! This createStore() was depreacted now
// const response = createStore(todoReducer, []);
const response = createStore(combinedReducers); 
//? Now in this createStore we pass reducer function and initial state which was empty array.

console.log(response);
//* Output of response
/**
{
  dispatch: [Function: dispatch],
  subscribe: [Function: subscribe],
  getState: [Function: getState],
  replaceReducer: [Function: replaceReducer],
  '@@observable': [Function: observable]
}
 */

//? This createStore was also give 4 more function
//* getState() : this function will give current state of our createStore
console.log(response.getState()); // Output : [ ]
//* replaceReducer() : This function will replace our current reducer function with another
// console.log(response.replaceReducer());

const { dispatch, getState, replaceReducer, subscribe } = response;
//* This subscribe function will be log our state updation always
// subscribe( () => console.log("subscribe fun execution" , getState()));

const addTodo = (todoText) => {
  return { type: ADD_TODO, payload: { todoText } };
};

const deleteTodo = (todoId) => {
  return { type: DELETE_TODO, payload: { todoId } };
}; 

const addUser = (userName) => {
  return {type: ADD_USER, payload: {userName}}
}

// dispatch method
// adding todo
// dispatch({type: ADD_TODO, payload:{todoText : "todo 1"}});
// dispatch({type: ADD_TODO, payload:{todoText : "todo 2"}});

// delete todo
// dispatch({type : DELETE_TODO, payload: {todoId : 1}});

// dispatch(addTodo("todo 1"));
// dispatch(addTodo("todo 2"));
// dispatch(deleteTodo(1));
// console.log(getState());

//? bindActionCreators Method which bind this function action creators with dispatch
const action = bindActionCreators({ addTodo, deleteTodo, addUser }, dispatch);
//* Here we bind our simple JS action with dispatch and now we don't use dispatch to update our state
action.addTodo("Learning Reactjs");
action.addTodo("Learning Redux Core for State Management");
action.addUser("Aayush Vyas"); 


console.log(getState());
