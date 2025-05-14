//! Try ToNumber Abstract Operation 

//* Lets try directly the ToNumber() operator 

// console.log(ToNumber("2")); //! It give error that ToNumber was not defined we discuss that this are abstract operation and internal function which implicitly convert other type into number type  

//? Lets do coercion which perform ToNumber operation 
console.log( 5 - 4); //* Output : 1
console.log( "10" - 5); //* Output : 5 
console.log(2 - null); //* Output : 2 { 2 - 0 }
console.log(5 - undefined) //* Output : NaN "Not a Number"