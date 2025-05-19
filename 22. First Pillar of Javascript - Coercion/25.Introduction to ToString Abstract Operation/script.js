//! Introduction to ToString Abstract Operation 
//* ToString was also abstract operation in javascript which do coercion and do type conversion into string type. 

//? Syntax of ToString : ToString(argument)  
//* Argument type                Coercion Output 
//  undefined type                 "undefined"
//  null type                       "null"
//  boolean type                   for true boolean value it converts into "true" string and false boolean value converts 
//                                  into "false" string 
//  number type                    converts into numeric string i.e "5" here NumberToString abstraction operation apply
//  symbol type                    Symbol type give use type-error 

//* For Object it have some steps : 
//* 1st. we applied ToPrimitive(argument , hint string) to return primitive value 
//* 2nd. return ToString(primitiveValue); 

//? Let see the example of ToString Abstract Operation 
function ToString(argument) {
    console.log(argument + ""); 
}


//* undefined type 
ToString(undefined); // Output : undefined 
//* null type 
ToString(null); // Output : null
//* boolean type 
ToString(true);  // Output : true 
ToString(false); // Output : false
//* number type 
ToString(4);  // Output : 4 
ToString(-4);  // Output : -4 
//* Object Type 
ToString({}) // Output : [object object]
ToString({valueOf(){
    return 1245;
}}) // Output : 1245 
//* Symbol type 
// ToString(Symbol("Aayush Vyas")); //! In Symbol type it give type error 
