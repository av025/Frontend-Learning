//! Equality operators and myth around it 
//* In javascript we have two type of equality operators : 

//? 1st. Abstract equality operator "==" Double equality operator 
// This Abstract Equality algorithm have some steps let understand those steps: 
//! 1st. The abstract equality first check the type of both operand are equal than it compare, if the operand have different type than it's try to apply coercion on it and try to convert in number type 
//! 2nd. After the coercion both have same  type than they call the strict equality operator to compare both operand value. 

//? 2nd. Strict Equality operator "===" Triple equality operator 
// This Strict equality operator algorithms also have some steps let understand those also : 
//! 1st. The strict equality first check the both operand have the same type or not if not than it returns false 
//! 2nd. After checking the type they are equal it compare both the operands value. 


//? Both Abstract equality "==" or Strict Equality "===" operator check the type of operands so it was myth that abstract equality operator only checks the value not type. 