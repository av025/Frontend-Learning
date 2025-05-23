//! Nested Scopes
//* When we create scopes inside scopes are called nested scopes


let x = 30;  
function fun() {
//   var x = 10;
  function gun() {
    var y = 20;
    console.log(x); 
    //! Here we print we don't get error because because  we define or declare this variable to it's parent scope so at the time of execution phase js execution machine first look in its own scope than don't get in it we look it's outer scope which was parent scope than it's not found there than it's look that's parent scope which was global scope in our case. 
    console.log(y);
  }

  gun();
//* Here we call the function gun()  inside the fun() function...

  console.log(x);
  // console.log(y);  //? It give error here which comes in the time of execution because y variable was not declare tin this fun() scope and also don't declare it's parent scope which was global scope. 
}

fun(); 


//! We have to understand that console.log was implicit feature which was provide by runtime not by javascript core features it provide js runtime enviornment which help to run and execute our code... 
