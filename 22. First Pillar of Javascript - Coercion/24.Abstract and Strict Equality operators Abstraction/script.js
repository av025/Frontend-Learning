//! Abstract and Strict Equality Operators Abstraction  

//* There was misconception that Abstract equality checks on value of operand not type and Strict Equality checks both type and value of operand which was wrong. 
//! Bith Abstract Equality or Strict Equality checks the type of operand let understand how here coercion applied and how language algorithm steps are happen.  

//? Abstract Equality Operator 
//* 1st. If the type of operand-one as same as type of operand-two  than it return the result after the calling strict equality operator comaprison "It means if type are same it work similar like strict equality operator"
//* 2nd. If the first operand type was null and second type of operand is undefined than it returns true 
//! Let see example of it : 
console.log(null == undefined); //* Output : true 
//* 3rd. Similarly if the type of one operand was undefined and second type of operand was null than it again return true. 
//* 4th. If the  operand-one type was number and operand-second type was string than abstract equality was convert operand-second type string into number type than again do comparison. 
//* 5th. If the operand-one type was string and operand-second  was number than abstract equality was convert operand-one into number type and again they do comparison. 
//* 6th. If the type of operand-one was boolean than abstract equality convert into number type than again do comparison with operand-second 
//* 7th. If the type of operand-second was boolean than abstract equality convert into number type than again do comparison with operand-one. 
//* 8th. If the type of operand-one was boolean than abstract equality convert into number type than again do comparison with operand-second. 
//! Example of point 8 
const object = {x:24, valueOf() { return 100;}}; //? Here we override the valueOf method
console.log(99 == object); // Output was false 
console.log(100 == object); // Output was true  
//* 9th. If the type of operand-one was string, number, and symbol than other operand-second was object than abstract equality apply the ToPrimitive operation on that object value of operand-second after get primitive value from ToPrimitive abstract operation again we do comparison. 
//* 10th. If the type of operand-one was object value and operand-second was string,number and symbol than abstract equality apply the ToPrimitive operation on the operand-one value which was object after getting primitive value from ToPrimitive operation again we do comparison. 
//* 11th. Above rules was not followed than direct return false.  


//? Strict Equality Operator 
//* 1st. If the type of operand-one and type of operand-two are different than it returns false output  directly.
//* 2nd. If the operand-one or operand-two is number type then : 
//*     - than if operand-one was NaN than return false 
//*     - than if operand-two was NaN than return false 
//! Case : let Assign both our operand NaN and compare that : 
console.log(NaN === NaN);  //* Output was false 
//? It means NaN was never we equal to each other here the rule was 2 invalid values are not equal to each other. 
//*     - If the operand-one have equal value to operand-two than it returns the true 
//*     - If the operand-one have +0 and operand-second has -0 than it returns true 
//*     - If the operand-one have -0 and operand-second has +0 than it returns true 
//*     - If this above rule was not matched than it return false.
//* 3rd. When the operands type was not number type other type like string , boolean etc than it returns the New abstract operation which was SameValueNonNumber(x,y) 

//? SameValueNonNumber abstract operation 
//* This SameValueNonNumber abstract operations it call when the operand-one and operand-two was not a number than it produces the output "true" and "false" like this : 

//? Algorithm Steps of SameValueNonNumber are : 
//* 1st. Assert Type operand-one is not a Number.
//* 2nd. Assert Type both operand-one and operand-two was not a Number. 
//* 3rd. If type of operand-one is undefined, return true 
//* 4th. If type of operand-two is null, return true
//* 5th. if the type was string then : 
//*   - if operand-one and operand-second was exactly have the same sequence, same characters ,same length, and same index number than return true otherwise return false
//* 6th. if the type was boolean then : 
//*  - if both the operand was true or false than return true otherwise return false. 
//* 7th. if the type was symbol then : 
//*   - if the both symbol have equal value than return true otherwise return false. 
//* 8th. if the type was object then:
//*   - if the both operand have the same object value or we say same memory reference than return true otherwise return false.  let see example of this rule :- 

// Creating some objects 
const objOne = {x:10};   // objOne 
const objTwo = {x:10};   // objTwo 
const objThree = {y:10}; // objThree
const objFour = objOne;  // objFour 

console.log(objOne === objTwo); //* Output : false because both are different object its create new memory reference
console.log(objTwo === objThree); //* Output : false because both are different object its create new memory reference
console.log(objOne === objFour); //! Output : true because in objFour we assign objOne which have the same memory reference






