//! Case One : 
const person = "Aayush"; 

function fun() { 
    var person = "Kratik"; 
    // lets create another variable  declare without any variable keyword 
    content = "JS"
    //! Now this was not good pratice to create variable without formal-declaration it create confusion and bugs in our code.
    console.log(person);

}

function foo() {
    var person = "Prateek"; 
    console.log(person);
}; 

console.log(content);   //! When we call thin variable content above the fun() calling it give reference error that content is not defined. 
//? Actually in Case One we see that when we don't create our variable in formal-declaration than auto-global mechanism happen which create that variable global in the case of function scope local variable content but we know that this assignment was done at the time of execution phase and we are accessing that variable before function calling than after we assign all declare local and function inside that scope value so that's why we ger reference error that content s not defined.
fun(); 
foo(); 
console.log(person);  

