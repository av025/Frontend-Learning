//! Numbers, NaN, Negative Zero and Negative infinity 

//? Numbers :- 
//* Programming language provide us lot of numbers as a data to us but in javascript we have three special kind of numbers like 0, -0, and NaN 

// let see  all of them one by one 

//? Negative Zero "- 0" 
// Now in javascript we do game development also so in which we requirect some pyshics concept like speed, velocity , magnitude and direction etc. let assume that you are creating any 2-d game in javascript and create player which was runing any specific speed and suddenly stop and it's speed become 0 m/s now we have to understand in which direction it stops in positive axis or negative axis
//! So this - 0 so here this negative sign indicate the direction of our player or any other thing in javascript 
//* -0 in JavaScript indicates direction, especially useful in physics for games.

//? NaN "Not a Number"
// If there was a situation where you are bond to return a number, but there is not a valid possible number to return than it was called as NaN "Not a Number".

//? It was special type  when we apply operation on number but it was not return the invalid number or NaN "Not a Number" 

//* Let see example of NaN 
console.log(10/2); //* Output was 5  
//! When we divide the 10 with number 2 than it's output was 5  

//* If we divide the 10 with string 2 than what was output ? 
console.log(10/ undefined); //! Output was NaN because we divide number with undefined. 

//* If we add and subtract with undefined value 
console.log( 5 + undefined); //* Output was NaN 
console.log(5 - undefined); //* Output was NaN  


//! Infinity and Negative Infinity 
// There was another two number which was Infinity and - Infinity 
//* We can assign direct infinity and  - infinity with the help of keyword let see example of it : 
let numberOne = Infinity; 
let numberTwo = -Infinity; 
console.log(numberOne) //? Output was Infinity 
console.log(numberTwo) //? Output was - Infinity  

//* We can create infinity output in programatic way also 
console.log( 5 / 0); //* Output was Infinity 
console.log(-6 / 0); //* Output was - Infinity 