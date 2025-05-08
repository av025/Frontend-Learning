//! Increment Operator :- 

//* To understand the increment operator first we have to understand Unary operators 
//? What is Unary operator in JS ? 
//* Unary operators are those operators which are work with single operand or we say work on single operand. 

//! This increment operator was also unary operator which help to do increment of looping variable and do increment in our variable. 

//? This Increment operator of two types 

//* 1st. Prefix increment operator 
// In prefix first we add the increment than execute our variable 
//! Here we first do increment like this "++" before just our variable 

let variableOne = 1; 
let variableTwo = ++variableOne; //* Here we apply the prefix increment operator  we are giving reference of variableOne 
console.log(variableTwo, variableOne); //! Output was 2 , 2 


//* 2nd. Postfix increment operator 
// In postfix first we assign value to variable than we do increment of our variable 
//! Here we do increment just after our variable "++" 

let variableThree = 2; 
let variableFour = variableThree++; 
//* Here we apply the postfix increment operator we are giving reference of variableThree 
console.log(variableThree, variableFour);   //! Output was 3 , 2   


//* Let see more example of it ...... 
let randomNumber = 10; 
let randomNumberTwo = randomNumber++;  //* here value was 10 

randomNumber++;  //* Here value was 12 of randomNumber variable 

console.log(randomNumber , randomNumberTwo); 
//! Output was 12 , 10 


//? Conclusion 
//* Here in postfix first we assign the value than we do increment. 
//* Here in prefiex first we do increment than we assign the value. 
