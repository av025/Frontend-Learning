//! Write Even numbers in a range of 1 to 50 with the help of function 

function checkEvenOdd() {
    for(let number = 1; number <= 50; number++) {
        if(number % 2 === 0) {
            console.log( number, "Number is Even");
        }else {
            //! return "Number is Odd"; When we return any things from function than our function execution will end that time only and it return that value.
            console.log(number, "Number is Odd"); 

        }
    }
} 

 checkEvenOdd();

