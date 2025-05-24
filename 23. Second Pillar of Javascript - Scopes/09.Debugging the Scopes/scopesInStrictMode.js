//! Scopes in Strict Mode 

//? Scopes in Strict Mode 
"use strict";
//? When we are using strict-mode execution than javascript does not allowed to create error by developers it check our code in strict and do strict validation.
{
    //* In the strict mode of javascript it restrict to use this fun function outside of this block-scope if we use  it give starting reference-error 
    function fun() {
        return "123";
    } 
    
    const executionOfFun = fun();  //* Save funct calling in the variable 
    console.log(executionOfFun); // Output : 123 
}

// console.log(fun());  //! It give Reference-error that fun is not defined 
// console.log(fun);   //! Here also it give reference-error that fun was not defined 