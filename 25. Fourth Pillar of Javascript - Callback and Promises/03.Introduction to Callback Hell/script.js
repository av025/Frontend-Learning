//! Introduction to Callback Hell
//* The problem with callback functions are : 
/** 
 * 1. Inversion of control 
 * 2. Callback hell 
 *  First we understand callback hell problem in which we call multiple function as an argument than it create Callback DOOM or Callback hell which  was difficult for readability 
 */ 


//? Let see the example of callback function 

function calculator(inputValue, secondValue , callbackfn) {
    callbackfn(inputValue, secondValue); 
}; 

function addition(inputValue , secondValue) {
    const additionOfTwoNum = inputValue + secondValue;
    console.log(additionOfTwoNum);
}; 


function subtraction(inputValue , secondValue) {
    const subtractionOfNum = inputValue - secondValue; 
    console.log(subtractionOfNum); 
}; 

calculator(25 , 45 , addition);

//* Another example of Callback func 
function firstCallback(callbackfn) {
    callbackfn();
}; 


firstCallback(function secondCallBack(callback) {
    console.log("Execute the Callback Func");
}); 




