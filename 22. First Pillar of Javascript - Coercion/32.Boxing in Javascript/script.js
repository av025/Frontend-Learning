//! Boxing in Javascript 
// As we know that in javascript we have primitive type which was atomic in nature means we can't mutate it change its original value. 

//? Lets apply toString() method to primtive type 
//? Convert number type into string type with the help of 
// console.log(1.toString()); //* It give error to us because we can use ToString() method on object mainly 

//? Convert undefined into string type 
// console.log(undefined.toString()); //* It give error to us because we can use ToString() method on object mainly 

//? Use toString() on string type 
console.log("abc".toString()); //* Output : abc  on string it was not give error to us.... 

//! Let create wrapper of round parenthesis than apply toString() method 
// console.log((undefined).toString());  //? On undefined still it give error 
console.log((1).toString()); //? Now It convert into string 
//! This wrapper concept was called as boxing which helps to convert primitive type into Non-primitive type like Object 
