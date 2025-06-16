//! What are Abstraction Operations
//* When type conversion happens automatically in JavaScript, it is called type coercion. These conversions are performed by the JavaScript engine itself, using internal abstract operations. These operations are defined by the ECMAScript specification, and we as developers cannot directly access or use them — they work behind the scenes.

//? Let explore and understand the  Abstraction operation

//* ToBoolean(argument)
// this abstract operation ToBoolean(argument) takes the argument and convert other types into boolean type

//? See the example of ToBoolean(argument)
// function toBoolean(argument) {
// if(argument) {
//    return true;
// }else {
// return false;
// };
// };

// Boolean Type
// let booleanType = toBoolean(false);
// booleanType = toBoolean(true);
// console.log(booleanType);

// Undefined Type
// const undefinedType = toBoolean(undefined);
// console.log(undefinedType); // Output : false

// null Type
// const nullType = toBoolean(null);
// console.log(nullType);

// number type
// let numberType = toBoolean(0);  //* Output : false
// console.log(numberType);
// numberType = toBoolean(-0);    //* Output : false
// console.log(numberType);
// numberType = toBoolean(NaN);  //* Output : false
// console.log(numberType);
// numberType = toBoolean(1);
// console.log(numberType); // Output : true

// string type
// let stringType = toBoolean("");  //* Output : true
// console.log(stringType);

// stringType = toBoolean("Aayush Vyas");
// console.log(stringType); // Output : true

// Symbol type
// const symbolType = toBoolean(Symbol("This was Symbol"));
// console.log(symbolType); // Output : true

// Object type
// const objectType = toBoolean({});
// console.log(objectType); // Output true

//? In javascript there was set of predefined values which was called the falsy and truthy value
//* Falsy values are those which give output false when we apply boolean operation.
//! The falsy values are undefined , null , "" Empty String, NaN, 0, -0
//* Truthy values are those which give output true when we apply boolean operation.
//! Except above values all are truthy values in javascript.

//* We can perform the toBoolean abstract operation with the help of NOT Operator "!"
// function customToBoolean(argument) {
// console.log(!argument);
// };

// customToBoolean(0); // Output : true
// customToBoolean(12); // Output : false
// customToBoolean(""); // Output : true
// customToBoolean("Aayush"); // Output : false

//* ToNumber(argument)
// This abstraction operation convert the given argument type into number type

//* Let understand ToNumber() abstraction operator with example
// function ToNumber(argument) {
// console.log(+argument, typeof +argument)
// };

//* undefined type
// ToNumber(undefined); //* Output : NaN , Number
//! NaN was the special type present in javascript when we do coercion or type conversion with number type and it was not converted successfully to number type than it's become NaN "Not a Number" and it type was number only.
//* null type
// ToNumber(null); //* Output : + 0

//* boolean type
//? true value convert into 1 when we applied the ToNumber() abstraction operation.
//? false value convert into 0 when we applied the ToNumber() abstraction operation.
// ToNumber(true); //* Output : 1
// ToNumber(false); //* Output : 0

//* string Type
// ToNumber("") //* Output : 0 because it was falsy value
// ToNumber("Aayush") //* Output : NaN
// ToNumber("123456") //* Output 123456

//? Now in the case of string type only number string was converted into numbertype or other string will convert into NaN.

//* Symbol type
// ToNumber(Symbol("This was symbol type"));  //* symbol type was give type error

//* Object type
//* In the case of Object type another abstraction operation call by javascript internally was ToPrimitive()
//* 1st. First when the argument was object in the toNumber() than another abstraction method was called that was ToPrimitive();
//* 2nd. Than ToPrimitive() value return into toNumber() value.

//? The Subtraction operator was called the ToNumber operator whenever we do operation with string let understand with the help of string.

// console.log( 1 - "2");  // Output : - 1
//* Internally this operation was doing like that : 1 - 2 = -1 so this subtract operator call the toNumber() so it convert string into number and it was convert into negative number.

// console.log(22 - "Aa"); // Output : NaN

// console.log(-"5"); // Output : -5

//! So conclusion was Subtract Operation was calling the ToNumber() abstract operation

//* ToString(argument)
// This abstraction operation ToString() takes argument of any type than convert into string type.

//* Understand ToString abstract operation with the help of example
function ToString(argument) {
  const convertion = argument + "";
  console.log(convertion, typeof convertion);
}

// undefined type
ToString(undefined); // Output : undefined string
// null type
ToString(null); // Output : null string
ToString(1); // Output : 1 string

//* the addition operator call the ToString() abstract operator
//* First this check what value in left operand and right operand
//  1st. If the both operand type was number than it return number type and do addition operation
console.log(5 + 5); // Output : 10
// 2nd. If any one operand left or right have string type than it perform coecrion and return concatenate string,
console.log(5 + "5"); // Output : 55
console.log("6" + 2); // Output : 62  
//* In the case of object when we use addition operator than for Object it was called the toPrimitve() abstract operator only.  

//? Abstract Equality 
//* 1st. If the both the type of operands, left operand and right operand have same type than return the Strict Equality operator 
//* 2nd if x operand was null and y operand was undefined than it return true output 
console.log(null == undefined);  // Output : true 
//* 3rd. if x operand was undefined and y operand was null than it return false output 
console.log(undefined == null); // Output : true 
//* 4th. if the x operand was number type and y operand was string type than on y operand we use toNumber(y) abstract operations so it convert y operand into number type 
//* 5th. if the x operand was string type and y operand was number type than on x operand we use toNumber(x) abstract operations so it convert x operand into number type. 
//* 6th if the x operand was boolean and y operand was number type than it x operand was converted into number type with the help of toNumber() abstract operation. 
console.log(true + 2); // Output : 3 
//* 7th. if the x operand was number type and y operand was boolean type than we convert y operand into number type with the help of toNumber() abstract operation. 
//* 8th. With the object type toPrimitive() abstract operation was used than do comparison again 
//* 9th. Return false if the value was not same 

//? Strict Equality 
//* 1st If both operand don't have same type than directly return the false 
//* 2nd. if x operand was NaN than returns false 
console.log(NaN === 1); 
//* 3rd. if y operand was NaN than returns false 
console.log(1 === NaN); 
//* 4th if x and y both have same value than return true 
//* 5th. if x is +0 and y is -0 than return true 
//* 6th. if x is -0 and y is +0 than return true 
//* 7th. return false if the value was not equal 

//! When we copmare NaN in both abstract equality or abstract equality was not equal to each other it give always false to us... 
console.log(NaN === NaN); // Output : False 
console.log(NaN == NaN); // Output : False  

//? In abstract equality also type checking was happen
