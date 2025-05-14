//! ToNumber on Strings 

//* Before work on Strings of ToNumber we can see how it do type-conversion with boolean type 
console.log(1 + true); //* Output was 2 
//! So This ToNumber abstraction operator converts this true boolean type into number type and return 1 conversion of boolean type so that's why it becomes 2 
console.log(1 + false); //* Output was 1 
//! So this convert into 0 number type from false boolean type 

//? ToNumber( ) on Strings 
// Now let understand how ToNumber Abstraction operator works on the Strings 
//  let understand with example 
console.log( 5 - "45"); //* Output was -40  
//! Actually this string was convert on the basis of the strings base number like this 4 * 10^1 + 5 * 10^0 = 40 + 5 = 45 than subtract operation we do which was 4 - 45 = -40 

//! So String type was convert into Number type on the base of string number 

//* if the string was not numeric than what happens 
console.log("45qwed" - 5); //* Output : NaN 

//? As we know that this ToNumber absatract operator will forcefully convert noth operands into number type  

//* Assignment 
console.log( 1 - '0xa'); //* Output was -9 
//! Because this string "0xa" first forcefully convert into number and this representation of decimal number 10 in hexadecimal so it convert it into 10 tham 1 - 10 = -9 only... 