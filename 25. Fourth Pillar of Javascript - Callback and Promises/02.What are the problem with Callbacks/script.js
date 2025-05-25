//! What are the problems with callbacks ?
//* There was common problem which was called callback hell
//* When we call multiple callbacks function inside functions are called Callback Hell.

function mainCallbackFn(callback) {
  console.log("Main Callback function Executed !!!! ");
  return callback;
}

function firstInnerCB(callback) {
  console.log("First Inner Callback was executed !!!");
  return callback;
}

function secondInnerCB(callback) {
  console.log("Second Inner Callback was executed !!!");
  return callback;
}

function thirdInnerCB() {
  console.log("Third Inner Callback was executed !!!");
}

mainCallbackFn(firstInnerCB(secondInnerCB(thirdInnerCB())));
//! Here we see that it create the CallBack hell  mulitple layer of function call to each-other by mainCallbackFn