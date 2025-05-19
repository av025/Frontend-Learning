//! NaN - Not a Number 
//* This NaN was special type in javascript whenever we have to show significance of not a valid number we used this NaN which means "Not a Number"  

//? When we do type-conversion to number with the help of both coercion "implicit" or conversion "explicit" than NaN cases occur 
//  let see example of it : 
console.log(Number("123"), typeof Number("123"));  // Output : 123 , number
console.log(Number("axwer"), typeof Number("axwer")); // Output : NaN , number  
//! When we convert non-number type into number type it give special type which was NaN 
console.log("acb" + 124); //* Output : NaN 

//? How can we check any operand have value was NaN or not 
//* We can help use equality operators ????  let try with that 
const notANumber = NaN; 
console.log(notANumber == NaN);  // Output : false 
console.log(notANumber === NaN); // Output : false 
//! It was rule that two not valid numbers are never equal to each other. 

//? Instead of this we used one function which was isNaN to check that variable have not numeric value or not 
const myName = "Aayush Vyas"; 
const myAge = 26; 

console.log(isNaN(myName), isNaN(myAge));
//! output was true and false with the help of isNaN method or function we can find that argument have non-numeric value. 

//? isNaN(number) : 
//*  This isNaN was doing the coercion insternally it called the ToNumber(argument) abstract operation : 
//*   - if the argument was NaN than return true 
//*   - otherwise return false if argument have type number 


//? We have another method to check NaN but it was specific to Number type only let see example of it 
console.log(Number.isNaN("Aayush")); //* Output : False 
//? When we check the Number.isNaN() method and argument type was not number type than it return direct false 
console.log(Number.isNaN(NaN));  //* Output : True 
//? When we check the Number.isNaN() was have type number than it check number was NaN, if it was than return true other wise false 
console.log(Number.isNaN(222)); //* Output : false 
//? valid number than it returns false 
//! This Number.isNaN() was more better utility as compare to isNaN because in it we don't do coercion 


