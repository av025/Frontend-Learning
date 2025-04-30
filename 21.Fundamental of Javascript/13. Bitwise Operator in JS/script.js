//! Bitwise Operators in JS 
// In reality whatever the numbers we stored in our prorgam was stored in the form of binary sequence or other datatype too they all are stored in the form of binary number because computer can understand only the binary language let take some example 

//* We create variable and assign value 4 
let binaryNumberOfThis = 4;    
//! It's binary number was 1 0 0 means 4 decimal number binary represent it 100  

//? Bitwise operator perform the corresponding operation on bit by bit on the given operands or we say we use bitwise operator to manipulate the bits of operands 

//* Types of Bitwise Operator : 
//? 1st. Bitwise AND Operator  "&"
// With the help of Bitwise AND Operator we can manipulate bits of operand according to AND Logical Gate let understand with example 
let numberOne = 5; 
//! Apply the bitwise AND Operator on the numberOne operand 
console.log(numberOne & 7 ); //* Output was 5 
//* Let see what happens behind the scene here 
//! Binary equivalent of 5 =    1 0 1 
//! Binary equivalent of 7 = &  1 1 1 
//!  Output                     1 0 1  ---> this binary equal to 5 in decimal number 

//* Example Two : 
let numberTwo = 6; 
//! Apply the bitwise AND Operator on the numberTwo operand 
console.log(numberTwo & 9); //* Output was 0 
//* Let see what happens behind the scene here 
//! Binary equivalent of 6 =     0 1 1 0 
//! Binary equivalent of 9 =  &  1 0 0 1 
//! Output                       0 0 0 0 ---> this binary equal to 0 only  

//* Example Three : 
let numberThree = 2; 
//! Apply the bitwise AND Operator on the numberThree operand 
console.log(numberThree & 5); //* Output was 5 
//* Let see what happens behind the scene here 
//! Binary equivalent of 2 =   0 1 0
//! Binary equivalent of 5 = & 1 0 1 
//! Output                     0 0 0 ---> this binary equal to 0 

//* Example Four : 
let numberFour = 15; 
//! Apply the bitwise AND Operator on the numberFour operand 
console.log(numberFour & 6); //* Output was 6 
//* Let see what happens behind the scene here 
//! Binary equivalent of 15 =    1 1 1 1 
//! Binary equivalent of 6  = &  0 1 1 0  
//! Output                       0 1 1 0 ----> this binary equal to 6  

//* Example Five : 
let numberFive = 6; 
//! Apply the bitwise AND Operator on the numberFive operand 
console.log(5 & numberFive); //* Output was 4 
//! Binary equivalent of 5 =   1 0 1 
//! Binary equivalent of 6 = & 1 1 0 
//! Output                     1 0 0  ----> this binary equal to 4 

//? 2nd. Bitwise OR Operator   "|"
// With the help of bitwise OR Operator we can manipulate bits of operand according to OR Logical Gate let understand with example 

//* Example One : 
let numberSix = 5; 
//! Apply the bitwise OR Operator on the given numberSix operand 
console.log(numberSix | 6); //* Output was 7 
//! Binary equivalent of 5 =   1 0 1 
//! Binary equivalent of 6 = | 1 1 0 
//! Output                     1 1 1 -----> this binary equal to 7  

//* Example Two : 
let numberSeven = 4; 
//! Apply the bitwise OR Operator on the given numberSeven operand 
console.log(numberSeven | 8); //* Output was 12 
//! Binary equivalent of 4 =     1 0 0
//! Binary equivalent of 8 = | 1 0 0 0 
//! Output                     1 1 0 0 ----> this binary equal to 12 

//* Similarly we can apply Bitwise XOR Operator & Bitwise NOT Operator 
//? 3rd. Bitwise XOR Operator  "^"
//? 4th. Bitwise NOT Operator  "~"