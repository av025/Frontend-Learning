//! Demonstrating ToPrimitive with ToNumber 

//* Let see demonstation with the help of example : 
const myObject = {
    valueOf(){
        return "10";
    }
}; 

//* So let's do concersion 
console.log(10 - myObject); //? Output was NaN
//! For ToPrimitive abstract operation we use subtract operation which was ToNumber abstract operation 

//* When we convert myObject into ToNumber than ToNumber call the ToPrimitive with input argument and hint input 
//* Now above myObject was "number" string so type valueOF method was called from methodNames so it returns the object so we know that ToPrimitive was return ToPrimitive value so it iterate on another method which was toString method which return string object which array like structure [object object] and it's type was string so when we perform coercion on Non-number string than it returns NaN 

//* i.e  10 - "[object object]"  Output was not valid number which was NaN 

//! If we override the "number" string type by using valueOf method which return "10" than it's output becomes 0  
