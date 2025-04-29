//! Operators - Arithmetic and Assignment 
//* In programming language this operations help to do some computation instrcutions like arithmetic computations , comparison computations, logical computations etc.  there are different types of operators in programming language

//? 1st. Arithmetic Operation
// In programming language with the help of arithmetic operation we can perform arithmetic operations like addition, subtraction,multiplication, subtraction, division etc. 

//* Addition operator
// With the help of addition operator we can add two or more than  operands let understand with the help of example : 
let numberOne = 10; 
let numberTwo = 2;

//? perform addition operation 
console.log(numberOne + numberTwo); //? Output was 12 
//! So here we have to understand that numberOne and numberTwo variable was operands and addition  "+" we applied on both are called operator.

//* Subtraction operator 
// With the help of subtraction operator we can subtract two or more than operands let see example of it 
console.log(numberOne - numberTwo); //? Output was 8 

//* Multiplication operator 
// With the help of multiplication operator we can multiply two or more than operands let see example of it 
console.log(numberOne * numberTwo) //? Output was 20 we use Asterik symbol for multiplication 

//* Division operator 
// With the help of division operator we can divide two or more than operands let see example of it 
console.log(numberOne / numberTwo); //? Output was 5 
//! When we use division operator it give numerator as output of our operation. 

//* Modulus operator 
// With the help of modulus operator we can also divide two or more than operands
//! This modulus operator returns the remainder of our operation  and we use percentage symbol for modulus 
// example of modulus operator 
console.log(numberOne % numberTwo); //? Output was 0  

//* exponential operator 
// With the help of exponential operator we can find the exponent or power of any operand let see example of it 
console.log(numberOne**2) //? Output was 100 
//! Here we use two star or two asterik symbol for exponential operation and give power of 2 to 10 that's why output was 100. 

//! This exponential operator was uniary operator means it required only one operand to perform operation

//? Assignment operation 
//* With the help of assignment operator we can assign the value to operands there was different type of assignment operator

//* 1st. Equal to oprator 
// With the help of equal to operator we can assign value to operand it was most basic and important operator in every programming language 
//* Example of equal to operator 
let numberThree = 40; //? this Equal to "=" was assigning 40 value to numberThree operand 

//! Arithmetic Assignment operation
//? Let see with example arithmetic assignment operators 

//* 2nd. Addition assignment operator "+=" 
numberThree += 10;
//! So here we assign 10 value to numberThree operand let understand what was happening behind the scence 
//! numberThree = numberThree + 10  => 40 + 10 = 50 
console.log(numberThree) //? Output was 50 

//* 3rd. Subtraction assignment operator "-=" 
numberThree -= 10; 
//! numberThree = numberThree - 10 => 50 - 10 = 40 
console.log(numberThree); //? Output was 40 

//* 4th. Multiplication assignment operator "*="
numberThree *= 2;
//! numberThree = numberThree *2 => 40 * 2 = 80 
console.log(numberThree); //? Output was 80 

//* 5th. Division assignment operator "/=" 
numberThree /= 4; 
//! numberThree = numberThre / 4 => 80 / 4 
console.log(numberThree); //? Output was 20 

//* 6th. Modulus assignment operator "%="
numberThree %= 2; 
//! numberThree = numberThree % 2 => 20 % 2 = 0 
console.log(numberThree); 

//! This assignment operator are all uniary operator 
