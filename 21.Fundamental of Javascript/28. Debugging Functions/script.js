//! Debugging Functions 
//? Why we are doing "return" in a function  can we use "console.log" in a function ? 

//* What is console.log() function  ? 
//? This console.log() function was used to print anything on console it can be our browser console or terminal 
//? here in this console it was object in the javascript and this log was method or function of the console object. 

console.log("Hello World !!!!"); 
//! Does this log function was also return something and that was undefined.....  

let x = console.log("Hello World"); 
//* We assign the console.log() statement 

// let's  do console.log value x 
console.log(x);
//? It's print Hello World 
//! And return undefined  


//* There are more inbuilt functions let see those :- 
const number = Math.sqrt(100);
console.log(number); 
//* Here output was 100 only to returning undefined 
//! So to return something from functions are depend on us if we want to return or not......  So function was always return something but it was depend on the developer if we want to return or not. 

//? When we use return statement that means we are storing the value into variable and used later and when we use console.log() method when we have to do print purpose only. 

//! If we don't return any value from function so in javascript the "undefined" value was return 

//* Example how can we pass data to function dynamically 
function greetToEveryone(name) {
    console.log("Welcome", name);
    return "Bye Bye";
}

greetToEveryone("Aayush Vyas");

const printPeople = greetToEveryone("Saijal Vyas");
console.log(printPeople); 
//! Here output was "undefined"


