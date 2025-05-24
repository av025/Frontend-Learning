//! More Detail on var let const and function expression 

//* Understand var variable with example 

//? Example One : 
function fun() {
    var i = 5; 

    while(i < 10) {
        var x = i; 
        i++; 
    };
    console.log(x);  //? Output : 9 
    //* After the looping the last value which was less than 10 was 9
    //! As we know that var was function scope and global scope because of lexical scoping and it was not bound with block scope so when this x variable was intialize inside the while loop but we acces and print outside it's loop 
}; 

fun(); 

//? Example Two : 
let i = 1; 

console.log(y);  //* Output : undefined 
//? We can access the variable before the initalization and declaration because we create with var keyword 

while(i < 5) {

    var y = 10;  
    i++; 
}; 

console.log(y); //* Output : 10 ; 
//? We can access the variable before the intialization because it was create with var keyword 
