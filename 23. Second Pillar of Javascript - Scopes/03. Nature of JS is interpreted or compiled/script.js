//! Nature of JS is interpreted or compiled 

//* Let understand this with the help of  pieces of code : 

// code - 1 : 

// function fun() {
//     console.log(1);
//     return 0; 
// }; 
// console.log("Helloooo"); 
// console...log("World"); 
// console.log("bye");

// code - 2 : 
// console.log("Hellooo"); 
// function fun() {
//     console.log(1); 
//     console...log("World"); 
//     console...log("Bye")
// }

//? If the javascript was purely interpreted language than it was print statement 11 "Hellooo" but it was not instead it give syntax-error it means javascript was not purely interpreted language.  

console.log("Hello");
// console.lo("Bye"); 

//* Now it print hello than it give syntax-error that console.lo() was not a function 
//? So it was not working as a compiled language to here it execute  line of code of 25 which was hello but at line of code 26 it give error to us that console.lo was not a function. 


//! Here we understand in javascript it use different architecture in which they are not fully interpreted and not purely compiled in javascript the code execution was done in 2 phases 1st. Parsing phase  2nd. Execution phase 

//? So the conclusion was javascript was not purely interpreted nor purely compiled language 