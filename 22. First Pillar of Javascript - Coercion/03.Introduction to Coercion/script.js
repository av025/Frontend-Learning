//! Introduction to Coercion

//* Let's understand coercion with examples:

// Adding two operands using the addition operator
console.log(22 + 22); 
//* Output: 44 
//* Reason: Both operands are numbers, so normal arithmetic addition is performed.

//? What happens when we add a number and a string?
console.log(22 + "22"); 
//* Output: "2222"
//! Explanation: 
// The `+` operator, when used with a string, triggers type coercion.
// JavaScript converts the number `22` into a string, so it becomes "22" + "22", 
// and performs string concatenation — not addition.

//? What happens when we subtract a number and a string?
console.log("22" - 22); 
//* Output: 0
//! Explanation:
// In this case, the `-` operator only works with numbers, so JavaScript converts 
// the string `"22"` into a number `22`. Then it performs: 22 - 22 = 0.

//! Summary:
// Coercion in JavaScript is an automatic conversion of data types.
// - With `+`, if one operand is a string, it converts the other to a string and concatenates.
// - With `-`, it converts both operands to numbers (if possible) and performs subtraction.
