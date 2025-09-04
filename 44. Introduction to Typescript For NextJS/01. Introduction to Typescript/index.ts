//! Introduction to Typescript 
// TypeScript is a superset of JavaScript. We use it to define strict data and variable types, making the code type-safe at compile time instead of being dynamic and changing at runtime. 

//* Let see types in Typescript 
// Here also in Typescript there was two types which are primitive and non-primitve 
// First we see Primitives 
/** 
 * String --> To Store the Collection of Characters 
 * Number --> To Store Numbers 
 * Boolean --> To Store Boolean value 
 * Undefined 
 * Null 
 * Bigint 
 * Symbol 
 * All are those which was also in Javascript 
 */ 

let id:number = 5; 
// In above we are using type anotation or type signature that means we are providing type to our variable 
//? Syntax :  let <variable_name> : <type_variable> = data  we use colon to give type anotation 
console.log(id) 

let myVariable = "It was not Javascript it was Typescript it will scream when we applied another type to this variable";

// myVariable = 55; //! Here it will scream and if we do compilation of ts to js it can't happen to because we are assign number to string type 

//? Union of Types 
//* When we have to store more than one type in our variable than we are using union of types using single pipe symbol "|" 

let variableSecond : number | string = 25; 
console.log(variableSecond); 
variableSecond = "25";
console.log(variableSecond)

//! Here we used typescript compiler which compile our code in Javascript and command was tsc <filename.ts> 