//! Explore negative zero with math sign and isObject 

const negativeZero = -0; 
console.log(negativeZero === 0); // output : true which was algorithm correct but can't specify which was -0 value 

//? Object.is() method 
//* The Object.is() static method determines whether two values are the same value. here the Object was global object which was available globally in js file. 

console.log(Object.is(negativeZero , 0)); //* output : false 
//? Now it give false to us when we compare -0 and 0 with Object.is() function  

//? Math.sign() method 
//* This method Math.sign() will help to check the sign our number value if it was positive or negative 

console.log(Math.sign(-5));  //* Output : -1 it means negative truthy value  
console.log(Math.sign(6));   //* Output : 1 it means positive truthy value 

//* Let check with 0 and - 0 
console.log(Math.sign(-0)); //* Output : -0 it helps to find direction of our vector quantity when we use negative sign 
console.log(Math.sign(0)); //* Output : 0 

//! As we know that -0 will have to know direction of vector quantity 