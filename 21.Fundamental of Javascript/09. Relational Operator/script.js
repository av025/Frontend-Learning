//! Relational Operator 
//? With the help of relational operator we can do comparison of two operands or we say find relation between two operands with the help of relational operator by comparing two operands. 
//? There was different type of relational operators 

//* 1st. Greater than operator  ">"
// With the help of greater than operator we can find which operand is greater than one operands. 
// example of greater than operator 
let numberOne = 5; 
let numberTwo = 10;  

//? Apply greater than relational operator 
console.log(numberOne > numberTwo); //* Output was false because 5 < 10 
console.log(numberTwo > numberOne); //* Output was true because 10 > 5 

//* 2nd. Greater than equal too opertor ">="
// This operator checks two condition first was greater than if any operand is greater than other than it returns true and  second condition if any operator was equal to another operator than on that case also it returns true. 

let numberThree = 5;

//? Apply greater than equal too relational operator 
console.log(numberOne >= numberTwo);  //* Output was false because 5 is not greater than 10 
console.log(numberTwo >= numberOne);  //* Output was true because 10 is greater than 5 
console.log(numberOne >= numberThree); //* Output was true because 5 is equal to 5 



//* 3rd. Smaller than operator "<"
// With the help of this smaller than operator we can check if the one operand was smaller as we compare with another operand. 
//? Apply smaller than relational operator
console.log(numberOne < numberTwo); //* Output was true because 5 was smaller than 10 
console.log(numberTwo < numberOne); //* Output was false because 10 was not smaller than 5 

//* 4th Smaller than equal too operator "<=" 
// In this smaller than equal to operator also check both condition smaller than & equal to for comparison between two operands
//? Apply Smaller than equal too relational operator 
console.log(numberOne <= numberTwo); //* Output was true because 5 was smaller than 10 
console.log(numberTwo <= numberOne); //* Output was false because 10 was not smaller than 5 
console.log(numberOne <= numberThree); //* Output was true because 5 is equal to 5  

//! This Relational operators always return the boolean values 