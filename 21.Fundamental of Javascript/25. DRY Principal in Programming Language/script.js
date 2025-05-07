//! DRY Principal in Programming Language  

//* In programming language DRY was Principal which stands for "Don't Repeat Yourself" means avoide the duplicate of code so, write code like this which we can implement once and re-use every time so it reduce the reduancy of our code so we don't write again and again same code instead of it we can reuse the same logic 

//? Loops and Functions are the based on DRY Principal only 

//* Example of Functions 
function addTwoNumber(numberOne, numberTwo) {
    const resultOfAddition = numberOne + numberTwo; 
    console.log(resultOfAddition); 
} 
//* Write Once the code of Addition of Two Number 

//? Reuse when we need this code 
addTwoNumber(2,2); //* Output was 4 
addTwoNumber(4,2)  //* Output was 6 
addTwoNumber(5,5); //* Output was 10 


