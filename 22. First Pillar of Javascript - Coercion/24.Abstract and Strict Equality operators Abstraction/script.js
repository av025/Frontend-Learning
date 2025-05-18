//! Abstract and Strict Equality Operators Abstraction  

//* There was misconception that Abstract equality checks on value of operand not type and Strict Equality checks both type and value of operand which was wrong. 
//! Bith Abstract Equality or Strict Equality checks the type of operand let understand how here coercion applied and how language algorithm steps are happen.  

//? Abstract Equality Operator 
//* 1st. If the type of operand-one as same as type of operand-two  than it return the result after the calling strict equality operator comaprison "It means if type are same it work similar like strict equality operator"
//* 2nd. If the first operand type was null and second type of operand is undefined than it returns true 
//! Let see example of it : 
console.log(null == undefined); //* Output : true 
//* 3rd. Similarly if the type of one operand was undefined and second type of operand was null than it again return true. 
//* 4th. If the  operand-one type was number and operand-second type was string than abstract equality was convert operand-second type string into number type than again do comparison. 
//* 5th. If the operand-one type was string and operand-second  was number than abstract equality was convert operand-one into number type and again they do comparison. 
//* 6th. If the type of operand-one was boolean than abstract equality convert into number type than again do comparison with operand-second 
//* 7th. If the type of operand-second was boolean than abstract equality convert into number type than again do comparison with operand-one. 


//? Strict Equality Operator 
//* 1st. If the type of operand-one and type of operand-two are different than it returns false output  


