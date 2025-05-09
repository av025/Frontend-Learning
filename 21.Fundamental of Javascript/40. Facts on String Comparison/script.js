//! Facts on String Comparison 

//* Let take an example 
console.log("abc" == "abc");  //? Here output was true because both string value are equal to each other 
//! this we write string "abc" was called string literals  

//* Another examples 
let x = "123";  //* this variable we assign the string literals 
console.log(x);  //? output : 123
let y = String("123");  //* this also we assign the string  but with the help of constructor which create String object
console.log(y); //? output : 123 
let z = new String("123"); //* Here also we assign the string object but with new instance that we create with new keyword  
console.log(z); //? output : [String : '123']

//* Abstract equality check or loose equality check 
//! In abstract equality we know that first if the type are different than it will do coercion after that it start comparing both operand 
console.log(x == y); // output was true 
console.log(z == y); // output was true 
console.log(y == z); // output was true 

//* Strict equality check 
//! Here in strict equality first we check if the type was equal or not if type not equal imidiate it give false 
console.log(x === y); //! Output true 
// output was true when we compare string literal "abc" to string object "abc". 
console.log(z === y); //! Output false because one type was object and second was true 
 // output was false when we compare the  new instance Object strin "123" to string object. 
console.log(x === z); //! Output false because one type was object and second was true 
// output was false when we comapre the string literal with new string object. 

//? Lets check typeof our operand also 
console.log(typeof x , typeof y, typeof z); 
// the typeof x variable was "string", typeof y variable was "string" and typeof z variable was object. 

