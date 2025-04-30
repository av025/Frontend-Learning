//! Short Circuiting and Coercion introduction with logical 

//? There was concept of Truthy and Falsy value in javascript
//* There was some falsy value in javascript by default which always return false output when we apply logical operator on it and similarly we have truthy value which returns true value when we apply logical operator on it. 

//! Let see first Falsy values 
//* null, undefined, "" {empty string}, NaN "Not a Number", 0, +0, -0 this all are the falsy values in javascript 
//? Except above values all are Truthy value in javascript, one thing we have to note that if we give just spaces to our string than it was not treated as empty strings "   " {This was truthy value} 

//! This Falsy default conversion was done by Coercion internally by all programming language in it's own way this was also called as "Type Conversion" or "Type Inter-conversion" 


//? Coercion "Type Conversion" 
//* This concept was have in every programming language so in coercion the javascript internally or implicitly convert one datatype to another datatype let take example of topic we know that there was falsy and truthy value in javascript when we apply logical operators on operands so it treats our another data-type value as boolean type only. 
// let see example 
console.log(10 && 6);  //? Here output was 6 because both the value are truthy that's why it give output 6 
//! One point raise in above code if both value are truthy than why 6 was output not 10 
// this was concept of short-circuiting lets understand that also 

//! Short Circuiting 
// Let understand shortcuiting with example 

//? AND Operator 

//* Case One 
console.log(false && true); //* Output was false 
//? Now in above code the short circuiting concept was applied because as we know that in AND Operator it check both operand was truthy or not if it was not than it give false value so here the AND operator checks the first operand value that was false so imidieately give the false value because if the first value was become false than there was not any sense to second anoth operands value and give output false 

//* Case Two 
console.log(10 && 6); //* Above we see the output was 6  
//? Here we have both operands was truthy value so first AND operand check the value of first operand was true than it goes to second operands and check the value of it because it was mandatory in AND operater that all values should be true so it check that 6 was also truthy value it returns it as output  

//! AND Operator always return as output last truthy value and true condition  as output return 


//* What was the output of this 
console.log( 6 > 4 && 6 < 8); // output was true 
//! Here it was not return truthy value because 6 > 4 & 6 < 8 was expression in programming language it was called expression which returns some output by doing evaluation. 


//? OR Operator 
// Let understand short ciruiting in OR Operator 

//* Case One : 
// As we know that in OR operator we want only one value as a truthy if the first operand have the truthy value than OR operator do short circuiting than it don't go to next operand and return the first operand value as output let see with example 
console.log(10 || 6); //* Here output was 10 

//* Case Two : 
// If the first operand was not having truthy value than it start checking to another operands  and if it got truthy value than it returns that truthy value let understand with example 

//? example One 
console.log(undefined || 3); //* Output was 3 

//? example Two 
console.log("" || null || 3 || "Aayush"); //* Output was 3 because it returns first truthy value than OR operator do short circuiting it was not looking ahead operands