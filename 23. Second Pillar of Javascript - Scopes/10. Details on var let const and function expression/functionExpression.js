//! Function expression 
//* In javascript we can define the function in different ways let see one by one with example : 
//? Function declaration 
// Whenever we create our function and use this function keyword than it was function declaration always understand that
function fun() { 
    console.log("Hello World !!!");

}; 

fun();  

//? Function Expression 
// Whenever we create the function with the help of variables or we say assigning the function declaration than it was called Function Expression. 

//* example one 
const a = function() {
    console.log("This is function expression !!!!"); 
}; 

a(); //! Accessing with the variable identifier because it storing those function declaration 

//* example two 
const f = function fun() {
    console.log("This is function expression !!!!"); 

};  

f(); //! Accessing with the variable identifier because it storing those function declaration 

 
//? This below example three to example five was Immdeiate Invoke Function Expression "IIFE"
//*  This IIFFE was also called the  anonymous function it immdeiately call the function together with declaration only.
//! It means that we declare and calling we do together only !!!! 
//* example three 
(function x() { 
    console.log("This is function expression !!!!");

})();  


//* example four
(function addTwoNumber(x, y) {
   console.log( x + y); 
})(20 , 30);


//* example five 
(function() {
    console.log("This is function expression !!!!");
})(); 


//? This example five was also function expression but it was syntatical sugar or we say short form of function expression  and it was called as Arrow function or Fat arrow function. 
//* example five 
let y = () => {
    console.log("This is function Expression !!!!"); 
}; 

y();  //* Output : This is function Expression 




