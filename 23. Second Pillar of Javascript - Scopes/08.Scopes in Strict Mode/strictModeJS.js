//! Strict mode in javascript 
// This strict mode execution brings more validations and other some rules which does not write wrong syntax code if we write it give error to us and it prevent us to make mistake like create variable without creating variable keywords. Some browser also can't support the strict mode mainly old browsers so some js web-app give disclamier that you use other browser for better user-interface experience. 

//? Strict mode brings some features and optimization to ur exisitng code let understand that : 
//* 1st. Eliminates some javascript silent errors by changing them to throw errors. 
//* 2nd. Fixes mistakes that make it difficult for javascript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode. 
//* 3rd. Prohibits some syntax likely to be defined in future versions of ECMAScript . 


//? We mainly stick to the "first point which was Eliminates some javascript silent errors by changing them to throw errors : "

//! We use the strict-mode in our javascript file or to any particulare feature with the help of statment which was "use strict"


"use strict"; 
//* With the help of "use strict" statement we can allow our js execution to follow strict syntax rules and also help to write more error-free code so it validate more strictly that we declare the functions and variable in syntax manner or not.  

//? Example One : 
// content = "Js" 
// console.log(content); //? Now it give reference-error that content was not defined in this global scope. 
//! Strict mode don't create auto-global variable like "Non-strict" Mode or Sloppy-Mode 

//? Example Two : 
//* Case One 
// console.log("Hello !!!"); 
// console.lo("World");  //? Here it give error because here was undefined function we are calling from console object so here  interpreter type error was given......  Here it give Undefined Error 
//! Here it give error at  the time of Execution phase 
// console.log("Bye !!!") 


//* Case Two 
// console.log("Helloo !!!!"); 
// console..log("World"); //? Here it give error because it was  syntax-error means we used wrong syntax that language was not understand because mistakely we use double dot ".." which does not any meaning So, Here it give Syntax Error 
//! Here it give error at the time of Parsing phase 
// console.log("Bye !!!"); 


//? Example Three 
function fun() {
    "use strict";  
    //? If we don't want to use this strict mode in our whole js file than we can use in modular way also create validation js rule checker in this function code also 
     var x = 10; 
    y = 20;
    console.log(x); 
    console.log(y);
}; 

fun();
console.log(y)


