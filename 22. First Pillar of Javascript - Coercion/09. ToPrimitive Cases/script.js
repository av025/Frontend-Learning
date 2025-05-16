//! ToPrimitive Cases 
//* ToPrimitive Abstract operation was used in the ToNumber Abstract Operation also like do coercion from one type to another type it used in subtraction operation when we convert both operands into number type.

//? ToPrimitive Algorithms Rule : 
//* 1st. The input type of valid Ecmascript or javascript type only . 
//* 2nd. If the input type was not object type than directly return the input 
//? 3rd. If the input was the object than algorithms check this conditions : 
//*    - if the preferred type was not present than we intialize preferred type variable as  "default type". 
//*    - Else if the preferred type was "string" than we intialize preferred type variable as  "string type".
//*    - Else if the preferred type was "number" than we intialize preferred type variable as "number type". 
//* 4th. Now after that we check the type and validation of input arguments
//* 5th. If the no preferred type was given than we intialize our variable by default so that default was "number type" only 


//! As we know that ToNumber abstract operation uses the ToPrimitive abstraction for example in the case of Object 
//* Case One : If the input was Object than Preferred type was used forcefully implicit type conversion into primitive type that than return input type 
//* Case Two : If the input was Primitive type than  directly return input type 