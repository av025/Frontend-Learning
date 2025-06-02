//! Closures in javascript 
//* As we know that in javascript our function are first class citizen because of main two reason :
//* 1st. Function return the Function 
//* 2nd. Function calling as an argument 
//* This two main features of function also create the Higher order function also...... 


//* Let see example : 
function process() {
    let i = 0; 
    function innerProcess() {
        //* What about this i variable where it was intialize and what value we are updating ??? 
        //! We are accessing the value of it's parent's scope variable and stored in this scope so we do processing and this value was stored in the memory so after the execution or returning of this function so whenever we called this innerProcess() it will do process again and again on that parent's scope variable value so with the help of concept called closures it means closing to the value of it's parent scope and this closures was happen by the javascript lexical scoping enviornment so it can get access the property or value of parent element. 
        i += 1; 
        return i; 
    }; 

    return innerProcess; //* Not calling the function just returning the function innerProcess from process function 
};


const result = process()  //* Saved in a variable 
// console.log(result);  //? Returning the function innerProcess  



//? Let see the execution of code
//* Parsing Phase 
//*  Call Stack                                 
//  |  function process()   {                        |  
//  |       let i = 0;                               |   //? block-scope variable i 
//  |     function innerProcess() {                  |
//  |              i += 1;                           |  //?  Function declaration                   
//  |               return i;                        |
//  |       }                                        |
//  |    return innerProcess ;                       |  //! return   
//  |                                                |  //! innerProcess fun and this function was  
//  |________________________________________________|  //! vanished from call-stack !!!! 
//  |         result = process()                     |     We stored the variable and  
//  |________________________________________________|     called the process( ) function


//? Than how we can access the value and also updating it when it was vanised or removed from the call-stack ???? 
console.log("First time calling result ",result());  //* Output : 1 
console.log("Second time calling result ",result());  //* Output : 2 
console.log("Third time calling result ",result());  //* Output : 3 
console.log("Fourth time calling result ",result()); //*  Output : 4 