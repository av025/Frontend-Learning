//! What are the problems with callbacks ?
//* There was common problem which was called callback hell
//* When we call multiple callbacks function inside functions are called Callback Hell.

function mainCallbackFn(callback) {
  console.log("Main Callback function Executed !!!! ");
   callback();
}

function innerCallback() {
   console.log("Calling inner callback function !!!")
}

mainCallbackFn(innerCallback);

//! Here we see that it create the CallBack hell  mulitple layer of function call to each-other by mainCallbackFn