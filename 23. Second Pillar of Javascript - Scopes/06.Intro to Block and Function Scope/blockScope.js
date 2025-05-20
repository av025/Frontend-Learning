//! Block Scope in Javascript 

// let initialize the block scope 
//?  var keyword variable 
 {
    var myName = "Aayush Vyas"; 
    //* var keyword variable does not care about the block scope means it can't understand block scope instead this block scope var treated as global scope for it.....  
 }  

 console.log(myName); //? We can access this myName variable outside the block-scope so var variable create the variable which was function scope and  


//* Case 
if(false) {
    var myAge = 25; //* intialize the variable myAge with var keyword 
}

//? When the condition becomes false, can we access the variable outside the if statement 
console.log(myAge); //* Output : undefined 
// here variable was undefined because  we can't access the variable but it was visible so that's why output was undefined 

//? let keyword variable 

{
    let myAnotherName = "Kratik Vyas"; 
    //* This let keyword variable was block-scope the accessibilty and visibility was associated to this scope only  

    console.log(myAnotherName)
} 


//? Let access the let keyword variable outside that scope let see what happens 
// console.log(myAnotherName); //! It give error that myAnotherName is not defined 