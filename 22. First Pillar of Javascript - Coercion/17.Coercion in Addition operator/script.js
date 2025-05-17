//! Coercion in Addition Operator
//* Undeestand how the coercion work in addition operator

console.log(5 + 5); //* Output : 10

//? Steps of coercion in Addition Operator
//* 1st. It fetches the value of both operand
//* 2nd. It try to convert both operand value ToPrimitive but in this addition operator there was not present optional hint preferred type argument
//* 3rd. In addition operator the conversion by ToPrimitive abstract operation was give to number type both the operand was coercion into number type.
//* 4th. If left-operand or right-operand was a string than "it was trying to convert into string through string concatenation.""
//* 5th. If both operand was not string  than number type coercion was done

//? Let see addition operation with the object type
const myObject = {
    //! In addition operator first preference was number type only 
//   valueOf() {
//     return 10;
//   },

  toString() {
    return "Aayush Vyas";
  },
};
console.log(2 + myObject); //* Output : "2[object object]"

//* override the method of valueOf()
console.log(3 + myObject); //* Output : 13

//* override the string method
console.log(5 + myObject) //* Output : 5Aayush Vyas 
