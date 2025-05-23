//! Scopes in Strict Mode  
//* Let understand scopes in Strict Mode with the help of some code example 

const person = "Aayush"; 

function fun() {
    var person = "Kratik"; 
    var contentOne;
    //* This line 10 create auto-global because it was not formal declaration we are not creating variable with the help of var/let/const keyword so that's why it create  global scope variable automatically by JS  
    content = "JS"
    //! This was not good pratice to create variable with keywords it create confusion and buggy error prone code so this was not recommended pratice because in Javascript "We create variable withour any keyword also... "
    console.log(person); 
    console.log(contentOne);
    console.log(content); 

}; 

function gun() {
    var person = "Prateek"; 
    console.log(person)
}; 
// console.log(content); 
//! Here above it give error because we are calling before the declaration of auto-global variable 
fun(); 
gun(); 
console.log(person)
console.log(content); 
//* We can access the content variable because it was auto-global 


//? Javascript was executed there code in two mode one was non-strct or sloppy mode and second was strict mode 

//! Non-strict mode "Sloppy Mode"
//* Default the javascript execute our code in non-strict execution in which it execute without less validations have some less strict checking by javascript machine to check and execute our js code we can create the variable without the declaration of variable keywords like let/const/var which create confusion and our code bugy and error prone code that's why it was not good pratice to create variable without let/const/var variable and it also create auto-global at the time of execution phase. 