//! Exploring the 2 phases of javascript execution 
//* Let understand the 2 phases of javascript execution 

// write js code to demonstrate 2 phases 
const person = "Aayush"; 

function fun() {
    var person = "Kratik"; 
    console.log(person);     
}

function gun() {
    var person = "Rahul";
    console.log(person);
}; 


fun(); 
gun(); 
console.log(person); 

//? As we know Javascript do execution in 2 phases  

//* 1st. Parsing phase 
// In parsing phase javascript do parsing of our code and do some steps.  
//? Important thing was happening in this parsing phase was Scope Resolution
//? Those steps are : 
//* 1st. Javascript read the whole code in one go 
//* 2nd. After the reading of whole js code than we implement variables and function it starting the allocation particular scopes for those.
//*

//* 2nd Execution phase 
// In execution phase javascript start executing our code from line of code one.  


//! In javascript there was three type of scopes 
//? 1st. Global Scope 
//*  Global scope was that place where variable , methods , function which are globally implement and accessible to whole js code 
//? 2nd. Function Scope 
//* When we defined the function scope those variables , function are accessible particularly to that function scope. 
//? 3rd. Block Scope 
//* When we implement the block scope than all the variables,  

//! Can we access the variable to print just before intialization 
console.log(per);  //* Output undefined with var keyword variable 
//? Yes we can access but with var keyword variable and it give output undefined or if we access the variable with let keyword variable define it give error that per was not defined. 

// let see some example of scopes 
// let per = "Aayush"; //? This variable was assign globaly to js code 

//* intialize the per variable with var keyword 
var per = "Aayush";
//? Below fun function we implement and create function scope in it..... 
function foo() { 
    console.log(per); 
} 

foo();

console.log(per); //* Print per variable  

//? let and var keyword variables also play crucial role to understand scopes in js


