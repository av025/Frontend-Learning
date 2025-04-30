//! Logical operators 
// With the help of logical operators our programming language start thinking or we say create logics in our program, in this logical operators we use our logical gates as we learn in our academics , this logical gates are electrical circuits which indicate the current was flown or not when we give inputs or multiple inputs to it and it give output in the form of boolean value like true and false.  

//? There was different type of Logical gates like : 
//* 1st. AND Gate 
// In AND Gate we take two inputs and it returns output on the basis of both input 
//?    X      |        Y     |   X & Y
//?  1 (TRUE) |   0 (FALSE)  |   0 (FALSE)
//?  0 (FALSE)|   1 (TRUE)   |   0 (FALSE)
//?  0 (FALSE)|   0 (FALSE)  |   0 (FALSE)
//?  1 (TRUE) |   1 (TRUE)   |   1 (TRUE) 
//* In AND Gate both the inputs switches should be on which we represent by 1 than only it give output current was flown if any one circuit switch was off it give output current was not flown as 0 we represent.

//* 2nd. OR Gate 
// In this OR Gate also we give inputs and it returns output on the basis of only one input which was true "1"
//?  X       |    Y        |  X or Y 
//? 1 (TRUE) |   0 (false) |  1 (TRUE) 
//? 0 (FALSE)|   1 (TRUE)  |  1 (TRUE)
//? 1 (TRUE) |   1 (TRUE)  |  1 (TRUE)
//? 0 (FALSE)|  0 (FALSE)  |  0 (FALSE) 
//* In OR Gate only one input circuit was on than it does not mandatory that other circuit was also on if it was switcg off than also it give as output current was flown if the both circuit was off than it returns output current was not flown  


//* 3rd. NOT Gate 
//* In NOT Gate it returns the reverse output of our input and vice versa if the circuit was on as our input than it give output as current was not flown or if our circuit was off than it give output as current was flow just totally opposite to our input and in this NOT gate we use only one input 
//?   X      |   NOT Output 
//? 1 (TRUE) | 0 (FALSE)
//? 0 (FALSE)| 1 (TRUE) 
//! This Three are Main Logical Gate there was Other Logic Gates are also there but they was create with the help of this three only.

//! Similarly we have this logical operators in our programming language which helps to think and create logics in our programming language. 

//? 1st. AND Logical Operator 
//* In AND Logical operator all the operands we are apllying our AND Operands should be true than only it give output as a true otherwise output was false always. 
//! We represent AND Logical operator with the help of double Ampersand symbol "&&"
// let see example of it 
console.log(true && false); //* output was false
console.log(false && true); //* output was false 
console.log(true && true); //* output was true 
console.log(false && false); //* output was false  
//? In AND Operator both the operands should have logical true boolean value other wise if anyone have false value it give us output false so both are mandatory should be true. 

//? 2nd. OR Logical Operator 
//* In OR Logical operator only one operands should be true amon all operands we are using to apply OR Operator than it returns true output otherwise if all operands was false than it give output false only. 
//! We represent OR Logical operator with the help of two pipes "||"
// let see example of it 
console.log(true || false); //* output was true
console.log(false || true); //* output was true 
console.log(true || true); //* output was true 
console.log(false || false); //* output was false
//? In OR Operators we applying there should be one operand was true among all than it give output true otherwise all are false than it give output false only. 

//? 3rd. NOT Logical Operator 
//* In NOT Logical Operator it give output of our operands opposite and vice-versa, it was uniary NOT operator let see example of it : 
//! We represent NOT Logical operator with the help of excalamation sign "!"
console.log(!true); //* output was false
console.log(!false) //* output was true 

//? Logical Operators with relational or conditional operator 
console.log( 3 > 5 && 2 < 3); //* Output was false 
// in above code statement output was false because first operand or equation was false because 3 was never greater than 5 
console.log(3 > 5 || 2 < 4 ); //* output was true 
// The output was true because here one operands condition was true 2 is less than 4  

//* With variables 
let firstBoolean = true; 
let secondBoolean = false; 

//? Applying NOT Logical operator 
console.log(!firstBoolean); //* Output was false 
console.log(!secondBoolean); //* Output was true

