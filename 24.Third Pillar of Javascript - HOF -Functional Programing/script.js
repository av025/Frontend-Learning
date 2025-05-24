//! Higher Order Function
//* In javascript , function are the first class means it have some special features or we say property if any js function summon that it called as Higher Order Function.

//? What are the features which create the normal function to a Higher Order Function

//* 1st. Function returns a Function
// Whenever a function return the function than it called the Higher Order Function.
//* 2nd. Function Calling as an argument in a function
// Whenever we called we call the function as an argument to a function than is called a Higher Order Function.

//? Let understand with example :
function callBackFun(x, callback) {
  return callback(x);
  //! Function Returning the Function
}

function greeting(x) {
  console.log(`Good morning ${x}`);
}


callBackFun("Aayush Vyas", greeting); 
//! Here we passed the function as an argument in the CallBackFun 

//? Whenever we passed the function as an argument or function returning function from function than it called the higer order function 
