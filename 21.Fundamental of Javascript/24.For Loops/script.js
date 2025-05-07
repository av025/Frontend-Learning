//! For Loops 
//* This was another loop for to do looping in our programming language 

//? Syntax of for loop 
//! for(declaring variable; condition of variable; increment/decrement of variable) {
//!
//!            Block of for loop 
//!
//! } 


//* Here in forloop we declare our variable, give condition and increment/decrement of variable was done inside the for-loop parenthesis all  

// let see example of for loop 

// Print number 0 to 10 
for(let number = 0; number <= 10; number++) {
    console.log(number);
} 


// Example Second of for loop 
let number = 0; 
for(let i = 1; i <= 100; i++) {
    
    number += i; 
    console.log(number);
} 


// Print number 10 to 0 with the help of for loop 
for(let number = 10; number > 0; number--)  
    console.log(number); 
//! When in our Forloop we have to if we have only one line of code than we don't have to create the scope of it "{ }".  


//? Lets Print the All Even Number which was greater than 1  and smaller than 25  
for(let number = 1; number <= 25; number++) {

    if(number % 2 === 0) {
        console.log(number);
    }
} 

//* Alternate method 
for(let number = 2; number <= 25; number +=2) {
    console.log(number);
} 
//* Here we start with 2 and increment with 2 