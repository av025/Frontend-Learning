//! Intro to ToBoolean 
//* This ToBoolean was also the abstraction operation which also perform the coercion and convert other type into boolean type
//* This was also abstract operation which done by language itself and we developers don't acces this method. 

//? We can perform ToBoolean abstract operation with the help of logical operator , comparison operator , conditional statement.   

//! Syntax of ToBoolean was : ToBoolean(argument)

//? Let see how ToBoolean abstract operation will perform with other type and which boolean value it convert. 
//* Javascript Type                                                  Boolean Value 
//  undefined                                                        Return false 
//  null                                                             Return false 
// strings                                                           Empty string "" was false otherwise all strings are true
// numbers                                                           0 , +0 and -0 was false otherwise all numbers are true
// boolean                                                           Returns the argument 
// Object                                                            Retrun true
// Symbol                                                            Return true 


//! In this ToBoolean abstract method it returns false to only falsy value other wise it return always true to other all value except falsy. 
