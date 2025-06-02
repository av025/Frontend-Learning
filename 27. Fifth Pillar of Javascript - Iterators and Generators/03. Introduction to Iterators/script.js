//! Introduction to Iterators 
//* In JavaScript, iterators are objects that allow us to iterate over data structures like arrays and strings. Both arrays and strings are iterable, which means we can loop over their elements and extract values from them. 

//* Understand more Iterators with the help of javascript 

//* Arrays are iterator Object 
const myArray = [1,2,3,4,5,6]; 

//* We can iterate with the help of for-of loop  
for(let indexValue of myArray) {
    console.log(indexValue);
}; 


//* Strings are also iterate 
const myName = "Aayush"; 

for(strChr of myName) {
    console.log(strChr);
}