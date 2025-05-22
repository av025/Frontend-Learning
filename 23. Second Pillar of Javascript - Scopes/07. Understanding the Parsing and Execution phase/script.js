//! Understanding the Parsing and execution phase in javascript 
//* As we understand that our javascript was not purely  interpreted or compiled language it have features of both interpreter and compilation and also we know that javascript execution was done in two phases 

//* Let understand the Execution Phase in javascript 
const person = "Aayush"; 

function fun() { 
    var person = "Kratik"; 
    console.log(person);

}

function foo() {
    var person = "Prateek"; 
    console.log(person);
}; 

fun(); 
foo(); 
console.log(person); 


//? 1st. Parsing Phase 
//* Lets understand what happeing in the parsing phase of javascript, In this phase  "Manily we do scope resolution". 
//* Step  - In this parsing phase  javascript read all code in one go than allocating variables names or identifier only not values according to there scope. 
//? Let show you example how its allocating variable names according to there scope 
// 1. const personOne ----> allocating variable and its scope was Global scope and it also check this only personOne variable declare in this global scope after that this personOne variable was allocated to global scope  
//2. Second we see the function declaration of fun so we again think about the scope here it create function scope but this fun was present in "global scope" but this fun create the function scope now we go inside the function scope and allocate person variable to this function scope 
//3. Third we see again function declaration of foo so we again think about scope here it create function scope but this foo was present in "global scope" and also create function scope now we go inside the function scope and allocate person variable to this function scope. 
//! In this parsing phase main thing was scope allocation so javascript firstly read our code in one go than allocate the variable according to scope and this variable and function mainly create the scopes. 
//! All the formal declaration like variable and functions and method are declare in this parsing phase. 

//? 2nd. Execution Phase
//* After parsing phase execution phase taken place in this phase we are assigning the value to our variable which was allocated according to scope of it . 
//! One thing Note that "Value assign to variable at the time of Run-time"  
// Let see steps what was happening in execution phase : 
//* Step - After the creation of parsing phase we assigning the value variable according to its scope  
//? Let see example how value was assign to our variable 
// 1st. There was first variable person  which was in global scope it see there was no other person variable assign to it than we assign the value to it. 
// 2nd. there was fun function declaration only we don't call it here  the local variable inside it not assign the value we assign at run time.  
// 3rd. there was foo function declaration only we don't call it here the local variable inside it not assign the value we assign at run time.
// 4th. Now we called the function fun and than we assign the local value to our variable it print that value 
// 5th. again we call the function foo than assign the local value to our variable it print that value 
// 6th. Now console.log(person) was printed which was in global scope 



