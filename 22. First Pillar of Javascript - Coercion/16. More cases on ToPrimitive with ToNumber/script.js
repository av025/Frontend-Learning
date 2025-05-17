//! More cases on ToPrimitive with ToNumber abstract operation 

//* Let explore more cases on ToPrimitive with ToNumber 
const myObjectFirst = {}; // myObjectFirst 
const myObjectSecond = {x:25, y:24, valueOf() {
    return 1; 
}}; // myObjectSecond 

//? Let perform ToPrimitive with ToNumber 
console.log(100 - myObjectSecond);  //* Output : NaN 
//! Here also the output was NaN because first we check the valueOf method of Object which return this object and toString() method return string which was [object object] which type was string
//* 100 - '[object object]' 
// Output was NaN  

//* Lets apply ToNumber again after override the valueOf method 
console.log(100 - myObjectSecond) //* Output : 99 


const myObjectThird = {x:24, toString() {
    return "88"
}}; 

console.log(100 - myObjectThird); //* Output was 12  

//? Case : When the toString method also return object than what happen ???? 
const myObjectFourth = { toString(){
    return {}
}}
// console.log(100 - myObjectFourth); //! Output it give Type-error 

