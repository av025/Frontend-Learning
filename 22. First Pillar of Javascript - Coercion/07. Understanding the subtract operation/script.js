//! Understanding the Subtraction Operation in JavaScript

//* When we use the subtraction operator (`-`), JavaScript performs an internal abstract operation.
//* Both operands are implicitly converted to numbers using the ToNumber abstract operation.

//* Let's see what happens when we try to subtract using a Symbol.
const mySymbol = Symbol("My Symbol");

// console.log(3 - mySymbol);  
//?  Throws TypeError: Cannot convert a Symbol value to a number

//* This is because the ToNumber operation does not support the Symbol type.

//! The subtraction operator (`-`) is an example of an abstract operation that triggers implicit type conversion.
//* Let’s understand it with a function:

function subtractOperation(operandOne, operandTwo) {
    const abstractOperationResult = operandOne - operandTwo;
    //? Both operandOne and operandTwo are converted to numbers using ToNumber
    console.log(abstractOperationResult);
}

subtractOperation(4, "4");       
subtractOperation(true, false);  
