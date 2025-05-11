//! Array Indexing and Comparison with String

//* We see that in string there was mechanism of indexing from which we can select the individual property similarly we can use that mechanism for array also.

//? Let see example of array indexing
const myNumbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//! Accessing value of array 
//* Same with the help of square bracket we can access the index value 
console.log(myNumbersArray[0]);  // Output : 1 
console.log(myNumbersArray[1]);  // Output : 2 
console.log(myNumbersArray[2]); // Output : 3 
console.log(myNumbersArray[3]);  // Output : 4 
console.log(myNumbersArray[4]); // Output : 5 

console.log("Looping Array"); 
//* Similarly we can loop this 
for(let arrayIndex = 0; arrayIndex < myNumbersArray.length; arrayIndex++) {
    console.log(myNumbersArray[arrayIndex]); 
} 

//! Lets understand how can we update any index value in array and string 
//* myString variable 
const myString = "Aayush";
//* myArray variable  
const myArray = ['A','a','y','u','s','h']; 


//? Let update the index value of array 
myArray[0] = 'a'; 

// print whole array 
console.log(myArray); //? Output : ['a','a','y','u','s','h'];  We update the value of index 0 'A' to 'a' 
//! In Javascript Array are mutable means we can change its original value. 

//* Now updating value of string "Aayush" 
myString[0] = 'a'; 
console.log(myString); //! Output : Aayush so here 0 index value was not update 'A' to 'a' 
//! In Javascript string was imumtable means we can't change the original value of string.  
