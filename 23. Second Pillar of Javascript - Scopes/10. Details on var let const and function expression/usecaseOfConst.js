//! Usecase of const keyword variable 
//* const keyword was help to create constant variables means we can don't change its value through-out the execution and we cannot do only declaration, redeclaration and reassignment to it. 

//* Let understand with the help of example of const constant variable 

//! We cannot just do declaration of const it give error to us
// const myName;  //* It give error Syntax-error : Missing initializer in const declaration

//! Whenver we declare the const variable we have to do intialization 
const myName = "Aayush Vyas";  

//! We cannot just re-assign the value of const constant variable 
// myName = "Kratik Vyas"; //* Type-error : Assignment to constant variable 
console.log(myName); 


//? const variable was also the block-scope variable same like let 
{   
//* Can we access the variable before its declaration or intialization ??? 
//    console.log(myAge);  //? It give reference-error myAge was not accessible  

    //* Here we do intialization of const variable 
    const myAge = 30; 

    console.log(myAge); // Output : 30 

} 

// console.log(myAge);  //! It give error here Reference-error : myAge is not defined 