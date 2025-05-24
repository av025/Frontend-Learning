//! Scopes of Function 

//* Let understand scope of  function expression here : 
const f = function fun() {
    console.log("Hello World !!!! "); 
}; 

//? How we can access this function expression with variable name which was f because we store our function declaration in it... 
f(); 

// fun(); 
// //* When we call fun() function directly than it give error that fun was not defined.

//! It means that we can access the fun function as the reference of variable identifier f only..... it has very tight bound with f constant variable so we don't give name or identifer to function expression instead use only function keyword so the variable we assign it becomes reference and call that function with that only. 
// example 
const myFunction = function() {
    console.log("This is my function"); 
}; 

myFunction();  



//* There was two types of function expression : 

//? 1st. Named Function expression 
// We assign name to function expression than it was called function expression. 

const myName = function name(name) {
    console.log(`My name is ${name}`)
}; 

myName("Aayush");

//* When we give name to function expression than it was easy to identify  why we use this function expression and why we call it so it increase the readability of function. 

//? 2nd. Anonymous Function expression 
// We don't assign name to function expression than  it was called function expression.

const greetingWorld = function(greeting) {
    console.log(greeting); 
}; 

greetingWorld("Aayush"); 

// console.trace(); 
//? This function help to know how our call-stack calling the functions and variable  calling in our stack 
