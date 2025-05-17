//! toString and valueOf 

//? First see the rules of OrdinaryToPrimitive abstract operation
//* 1st. Assert type or Input type: If the O was an Object input argument 
//* 2nd. Assert type or Input type: if the assert type of hint was "string", than its value was "string" and "number" {number string}
//* 3rd.  If the hint type was string :- 
//* - than we create the methodNames "A array like data structure" in which we store two things one of "toString" and second was "valueOf" i.e ["toString", "valueOf"] 
//! If the hint type was String than methodNames array have ["toString","valueOf"]
//* 4th. Else 
//* - than we create the methodNames in which we store  two things one of "toValue" and second was "toString" i.e ["valueOf", "toString"] 
//! If the hint type was Number String than methodNames array have ["valueOf", "toString"] 
//* 5th. After that we do Loop on names of methodNames or apply forEach Array method on methodNames in list order we do, it specify that methodNames was an array 
//* than it do two methods 
//* a. First was it fetches the method which was "toString" that was not abstract method this method was define in javascript and this "valueOf" method also.... 
//* b. Second if the method was callable means the method was executable true than : 
//* - we call the method and saved in result variable 
//* - if the result we stored was not object than we just return that result 
//? This method was repeat if we don't get non-object than it iterate on valueOf method and check this was callable or not it true than this two steps done again.  If the hint type was not string than on number string we applied this step. 
//* 6th. If we don't get the Primtive type method than return type-error   





