// console.log(process);
// console.log(process.env); 
// console.log(module); 
// console.log(require);
console.log(__dirname)
//! This all are NodeJS Globals Objects 

// const timer = setTimeout(() => {
//     console.log("Timer Completed")
// }, 1000);  

// console.log(timer); 

//* This timer functions are different implmentation in different run-time enviornment for example in browser chrome this timer was associated with number ID and in Nodejs it was Timeout Function  

//* Using CJS Module for importing and exporting file code in Nodejs and it was default moduling mechanism 
const searchingFunctions = require("./searching"); 

const {linearSearch, binarySearch} = searchingFunctions; 

const linearSearching = linearSearch([2,3,44,56,23,99], 23); 
console.log(linearSearching); // On 4th Index...  

const binarySearching = binarySearch([46, 77, 89, 100], 100); 
console.log(binarySearching) // On 3rd Index... 