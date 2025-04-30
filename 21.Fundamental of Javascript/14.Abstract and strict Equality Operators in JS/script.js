//! Abstract and Strict Equality Operators  
// In Javascript there was two type of operators first was double equality operator "==" and strict equality operator "===" 

//? 1st. Abstract Equality or Double equality operator "=="  
//* 1st. In Abstract Equality also it checks the type of both operands if both operands have same type than it calls the strict equality or triple equality operator 
// For example 
console.log(5 == 5); //* output was true
//! Here we use abstract equality operator and compare two operand with same type so internaly strict equality calls so in abstract also we check the type 

//* 2nd. If the type was not same than type conversion was occur which we called as coercion (inter-type conversion) than comparison was done. let see example of it 
console.log(2 == "2"); //* output was true
//! Here this string type convert into number type than again comparison done because both become same type than strict equality operator calls than check its value 

//? 2nd. Strict Equality or Triple equality operator "==="
//* 1st. In Strict Equality it checks the types of both the operands if the types are different than it returns false directly.
console.log(5 === "5") //* Output false
//* 2nd. If the types was same than value comparison was occur after type check 
console.log(6 === 6) //* output was true 


//! What happen if we compare NaN with Strict equality operator 
console.log(NaN === NaN); //* output was false  
//? Here we use Strict equality so it's type was same which was number but it's not equal to each other because both are not valid number it's undefined