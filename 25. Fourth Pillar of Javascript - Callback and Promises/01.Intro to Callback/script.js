//! Intro to Callback 
//* Understand the callback basically it was the function which we pass an argument to a function in Hihger Order function let understand with example 

//? Assume that we are creating the calculator with the help of functions 

//* example one : Callback func
function mainFunc(value , callbackfunc) {
     
    //? forloop 
    for(let i = value; i <= 10; i++) {
        console.log(i); 
    }; 

    callbackfunc(); 
}; 

function randomFunc() {
    console.log("Iam Callback func also executed !!!"); 
}; 

mainFunc(1, randomFunc); 


//* example two : Callback func 

function sumOfTwoNumber(valueOne, valueTwo , callbackfunc) {
    callbackfunc(valueOne , valueTwo); 
}; 

function addingTwoNumber(x , y) {
    console.log(x + y); 
}; 

sumOfTwoNumber(5 , 10 , addingTwoNumber);  //* Output : 15 

//? Conclusion : The Callback function was those function which was passed as argument to a function and that function we are passing consume that callback function 


