//! Coercion Special Cases : 

//? As we see that for ToString abstraction we add empty string with our operand so it becomes string than concatenate with each other. 
console.log("" + 0, typeof ("" + 0));  //* Output : 0 , type : string 
console.log("" + (-0)); //* Output : 0 so, here we see that -0 was also convert into 0 string 
console.log("" + []); //* Output : "" - Empty String 
//? So our array was convert into empty string because it was empty array so it removes the square brackets 
console.log("" + [1,2,3,4,5,6]); //* Output : 1,2,3,4,5,6  this + operator do coercion and convert array elements in string and also seperated with commas our array element. 
//? What happen when we convert our falsy array element 
console.log("" + [null, undefined]);  //* Output : , 
//* When we perform ToString abstract operation it removes falsy value from our array 
console.log("" + [1,2,null,3,undefined]); //* Output : 1,2,,3, 

//? Some special cases with ToNumber abstract operation 
console.log(0 - "010") //* Output was -10 because this string was convert into 010 which was 10 only and than we do 0 - 10 = -10 
//? Above number string was convert into decimal number 
console.log( 0 - "O10"); //* Output was NaN because bymistake or to look how zero 0 and character 0 was handle in this concat implicit operation because both look like same. 
// console.log(0 - 010); //* Output was -8 here this 010 was convert into octal number but it give suggestion not to assign like this octal number create octal literals which was '-0o10'
//? Convert into hexa-decimal 
console.log(0 - "0xb" );  //* Output was -11
console.log(0 - 0xb);  //* Here also output was -11 and it was valid number 0xb 

//? Some special Cases with an array 
console.log(0 - []); //* Output : 0 here this array was convert into 0 
console.log([""] - 1) //* Output : 1 here also array was convert into 0 
console.log(["1"] - 0); //* Output : 1 here also array was convert into 1 
//! Empty array was converted into 0 decimal value 