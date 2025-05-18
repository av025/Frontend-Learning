//! Example of addition with object 

//* First we create object 
const myObject = {}; 

//* example one : 
console.log(myObject); // Output : {}

//* example two : 
console.log( "10" + myObject);  // Output : "10[object object]"
//? This addition operator was used to help coercion this + operator first priority was convert into number and if the second operand was string than it convert into string and concatenate 

console.log(10 + myObject); // Output : "10[object object]"
//? In this both was convert into primitve value the left-hand was already primitive value when we convert myObject into to Primitive value so it was don't have hint to it takes "number" string hint so methodValues was created in which first we access the valueOf method and second was toString and we have to return primitive value first we iterate on valueOf method which return current object here we don't get the primitive value than we iterate on the toString method which return '[object object]'
//* So that 10 + "[object object]" = "10[object object]" 
