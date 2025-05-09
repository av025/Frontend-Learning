//! Ternary Operator 
//* Ternary operator was syntatic sugar of if else statement or we say short hand of if-else statement 

//? Syntax of Ternary operator 
//*  Condition ? Expression One : Expression Two 
//!  Assume If    "Block of"       Assume Else
//!  Statement    "If Statement"  "Block of Statement" 

//* In ternary operator we use Question symbol "?" for condition and if the condition becomes true than that statement was execute and for secondary statement was execute we use the colon ":" for second expression to execute statement. 

// See the example of ternary operator 
const conditionOne = 5 < 10 ? "5 is less than 10" : "10 is less than 5"; 
//! Here the condition we given was 5 is less than 10  and use use question mark "?" symbol like we are asking the condition was true or not and than it was not than it will execute second statement "10 is less than 5"
console.log(conditionOne); //* Output was 5 is less than 10 

console.log(false ? "Hello World" : "Hello To Everyone");  //* Output was Hello To Everyone  

let a = 1; 
let conditionSecond = 3 < 1 ? 3 - 2 : a++; 
console.log(conditionSecond); //* Output was 1 because we use postfix increment operator  


//! Using Ternary Operator with function 

function eligibleForVote(age) {
    const citizenAge = age >= 18 ? "You can vote" : "You can't vote "; 
    console.log(citizenAge); 
} 


eligibleForVote(17);
eligibleForVote(25);
