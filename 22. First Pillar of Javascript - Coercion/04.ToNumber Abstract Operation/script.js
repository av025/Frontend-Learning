//! ToNumber Abstract Operation : 
//* This Abstract Operation ToNumber was convert or try to convert  argument to a value number-type. 

//? Lets Create custome ToNumber func which convert any type into number type 
function ToNumber(argument) {
    console.log(+argument, " typeof : " , typeof +argument); 
}


//* Let convert the undefined data type
ToNumber(undefined); // Output was NaN 
//* In the case of null 
ToNumber(null); //* Output was 0 

//* See more cases 
console.log(2 - "20"); //* Output was -18 
//* Now when we use TONumber Abstraction operator it converts the first operand forcefully into number type if any other type value we provide and this second operand similarly convert into number type forcefully if we give ohter type operand.  

function ToNumberUpdVer(argumentOne , argumentTwo) {
    const outcomeResult = argumentOne - argumentTwo; 
    console.log(outcomeResult); 
} 

ToNumberUpdVer(2, undefined); //* Output : NaN 
ToNumberUpdVer(4 , null); //* Output : 4 => 4 + 0 "null type conversion" = 4 