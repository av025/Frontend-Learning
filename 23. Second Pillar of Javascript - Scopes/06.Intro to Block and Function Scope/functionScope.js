//! Function Scope in Javascript 
//  let see the exapmle of func scope 
if(false) {
    var myAge = 25; //* intialize the variable myAge with var keyword 
} 

//? When the condition becomes false, can we access the variable outside the if statement 
console.log(myAge); //* Output : undefined 
// here variable was undefined because  we can't access the variable but it was visible so that's why output was undefined 


//* case 
function fun() {
    var x = 25; //! This variable was function scope and it was accessible and visible upto to this function scope only we can't use x variable outside this variable 

    console.log(x);
} 

fun();

//* let access the variable x outside the function scope 
// console.log(x); 
//! It give error when we used outside the variable  


//* case 
function foo() {
    console.log(y);  //* We see that we can access the variable but value was undefined  with var variable 
    var y = 40; 

    //? let see let keyword variable 
    // let y = 40; //! It give error when we access the variable before the declaration or initalization in the case of let keyword variable 

    //? This above concept was hosting in javascript in which we can access function and variable before there declaration. 
}

foo();
