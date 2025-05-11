//! Problem Solving - String Palindrome - String Index 

//* In String we have the indexing to our string characters or words which start from 0 let understand that with example 
//?  "Aayush" 
//!   012345   So every individual characters have there own indexing 

// let give some space and check and assign again the string characters 
//? A   a   y   u   s    h 
//* 0 1 2 3 4 5 6 7 8 9 10     Here Empty spaces also are valid characters which have index to let's check the length of the string  

//* In the Strings we start our indexing with 0 to length - 1 we go in indexing. 

const exampleString = "A a y u s h"; 
console.log(exampleString.length); //? Output was 11 because our length start from 11 
//! With the help of length property we can find the length of our string this .length property was inbuild method. 

//! We can access this index character also with the help of brackets "[ ]" operator 
console.log(exampleString[0]); //* Output : A 
console.log(exampleString[1]); //* Output : " " Wide Space String 
console.log(exampleString[2]); //* Output : a 
// ................... 
console.log(exampleString[10]); //* Output : h 

//? As we know that in above string our length was 11 let try print what value at index value 11 
console.log(exampleString[11]); //* Output : undefined 
//! Because at index 11 the value was undefined, our string indexing start from 0 and go upto string length - 1 so that's why its value was undefined.  


//* Let print all the index of string 
let exampleStringSecond = "SomeExtraStringAdded"; 

//? We can do looping of this variable also 
for(let index = 0; index <= exampleStringSecond.length - 1; index++) {
    console.log("Index Number : ", index, "Index Value : ", exampleStringSecond[index]); 
}


//? Check the Palindrome if the given input was or not...... 
function checkPalindrome(inputString) { 
   
    for(let stringIndex = 0; stringIndex < inputString.length; stringIndex++) {

    }

}