//! More Unary Operator 
//* Lets see more unary operator in javascript 

//? Similar like unary increment operator we have decrement operator to let see example of 
//* Example First : 
 let variableOne = 3;  //* variableOne intialize 
// lets decrement value 3 
variableOne--; //! Here we use decrement postfix operator in which first it assign the value than print 
console.log(variableOne);  //? Output was 2 

//* Example second :
let variableTwo = 2; //* variableTwo intialize 
// lets decrement value 2 
--variableTwo; //! Here we use decrement prefix operator in which first we decrement value than print 
console.log(variableTwo);  //? Output was 1  


//! "+" Plus unary operator 
//* This "+" Plus unary operator was used to convert other datatype into number datatype when we use before our operand 

console.log(+true, typeof +true);  //* Output was 1 
//! This + unary operator convert our true value into number type 


console.log(+"22", typeof +"22"); //* Output was 22 
//! This + unary operator convert our string value into number type 


//! "-" Minus unary operator 
//* This "-" minus unary operator was also used to convert other datatype into number datatype but it converts in negative number value.

console.log("operand value :",-false ,", datatype of operand :", typeof -false); 
//! Output was -0 as operand value and datatype of operand was number 

console.log("operand value :", -"56", ", operand datatype :", typeof -"56");
//! Output was -56 as operand value and datatype of operand was number 


//! typeof operator 
// typeof operator was also unary operator which helps to findout datatype of our operand. 
console.log(typeof 256);  //* Output was number 