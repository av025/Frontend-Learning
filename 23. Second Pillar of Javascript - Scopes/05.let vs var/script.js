//! let vs var 
//* As we see that this let and var keywords variable also play crucial role in the scopes 

//? Let and const variable was block scope variable let understand that  
//! We create the block scope with the help of curly braces {    } 

//*  let was variable scope and we defined the block scope variable 
{
    let myName = "Aayush"; 
    console.log(myName);
    //? Just create variable with var keyword let see what happen if we use outside of this block scope 
    var myAge = 26; 
    console.log(myAge);
}


//? Let access scope variable outside it scope see what happen 
// console.log(myName) //! It give error that myName is not defined  


console.log(myAge); //* It gives output which was 26 means we can use var variable outside the block-scope also var variable doesn't care about blcok scopes 

//? var keyword variable 
// var keyword variable was used create inside the global scope and functional scope and we can redeclare the var variable also  let see example of it : 
var variableOne = 1; 

if(true) {
    //* Redeclare the variable 
    var variableOne = 2; 
    console.log(variableOne); //* Output was 2 
}; 


console.log(variableOne); // Output was 2  

//! Conclusion : 
//* var was global scope and functional scope variable which was redeclare also and it does not stick to block scope we can use everywhere in our js code .
//* let and const both are block-scope means it's visibility and accessibility was upto that particular scope only we can't use that variables outside that scope it give us error and we can't redeclare the let keyword variable. 