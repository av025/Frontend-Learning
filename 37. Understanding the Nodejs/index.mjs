// console.log(process);
// console.log(process.env); 
// console.log(module); 
// console.log(require);
// console.log(__dirname)
//! This all are NodeJS Globals Objects 

// const timer = setTimeout(() => {
//     console.log("Timer Completed")
// }, 1000);  

// console.log(timer); 

//* This timer functions are different implmentation in different run-time enviornment for example in browser chrome this timer was associated with number ID and in Nodejs it was Timeout Function  

//* Using CJS Module for importing and exporting file code in Nodejs and it was default moduling mechanism 
// const searchingFunctions = require("./searching"); 
// import { linearSearching as ls} from "./searching.js"; 
 import * as searching from "./searching.js"
 //* This above ampersand importing was default importing and put every methods or variables in an variable searching which was object only. 
import binarySearching   from "./searching.js";

// const {linearSearch, binarySearch} = searchingAlgos; 

const linearSearch = searching.linearSearching([2,3,44,56,23,99], 23); 
console.log(linearSearch); // On 4th Index...  

const binarySearch = binarySearching([46, 77, 89, 100], 100); 
console.log(binarySearch) // On 3rd Index... 