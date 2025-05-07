//! Writing Functions in Javascript 

//* First See Syntax of Function how we create function in JS 
//! 1.We use the function keyword "function" 
//! 2. Second we give identifer means name to our function than
//! 3. Use circle parenthesis "()" 
//! 4. Create scope of our function with curly braces "{}" 

//? function function_identifier() {
//?  // Block of Function Scope 
//?  Here we write our code of instruction
//!  Function returns something if we want to otherwise it return undefined 
//? }
//* Above we call the function calling......  


//! Second part in function was calling function 
//? function_identifier( )
//* Second we call the function to execute..... 


//? Let see with example how can we create Functions in Javascript 
//* Create the function to check if the number even and odd 

function isEvenOrOdd() {
    let number = 20; 
    
    if(number % 2 === 0) {
        return true;  //* In conditional we return this if even number 
    }else {
        return false;  //* In conditional we return this if odd number
    }
} 


if(isEvenOrOdd()) {
    console.log("Number is Even !!!");
} 


