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


// let see some example of scopes 
// let per = "Aayush"; //? This variable was assign globaly to js code 
//* intialize the per variable with var keyword 
var per = "Aayush";
//? Below fun function we implement and create function scope in it..... 
function fun() {
    //! When we create variable per with let keyword than it give error to us that per was not initalize so we can't use that. 
    console.log(per); 
    //* If we use var keyword variable it was not giving us intialization error 
} 

fun();

console.log(per); //* Print per variable  





