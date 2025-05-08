//! Arguments and Parameters in Functions 

//? What is arguments and Parameters in Functions 

//* Parameters are like the variables or local variables which we pass to the parenthesis of our function and we can pass multiple parameters to our function 
//* Arguments are giving at the time of calling function and we can pass arguments as value or assigning value to our parameter and we can pass as reference value also. 

// Let see example of function with parameter and argument 
function addTwoNumber(valueOne, valueTwo) {
   const resultOfTwoNumbers = valueOne + valueTwo; 
   return resultOfTwoNumbers; 
}  

let firstValue = 10; 
let secondValue = 20; 
//* Here we passing value as reference 
const resultOfFunction = addTwoNumber(firstValue, secondValue); 
console.log(resultOfFunction);  

//* Here we passing directly argument to our function calling 
console.log(addTwoNumber(30, 60)); 


