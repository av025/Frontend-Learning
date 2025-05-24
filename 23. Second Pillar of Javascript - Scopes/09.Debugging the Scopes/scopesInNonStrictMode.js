//! Debugging the Scopes 

//? Scopes in Non Strict Mode 

{
    //? When we are using non-strict mode execution in javascript than we can use access the function outside this block-scope 
    function fun() {
        return "123";
    }; 
    //* This function declaation does not care about this block-scope when we are using the non-strict mode or floppy-mode 
}; 

console.log(fun());  //* Output : 123 
console.log(fun);  //* Output : Reference the function [Function: fun] 



