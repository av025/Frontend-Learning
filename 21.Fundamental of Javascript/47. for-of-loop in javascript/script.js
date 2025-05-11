//! For loop in Javascript 
//* This for of loop was also use for looping or to iterate our data-structure like string , arrays so this loop basically based on the value of the index not index of array let see example of it :- 

const myArray = [11, 22, 33, 44, 55, 66, 77, 88, 99, 110]; 

//* Now i want value of this array than we used for-of-loop which was short hand of our other loop because here we get direct index-value. 

for(const indexValue of myArray) {
    console.log(indexValue); 
} 

const myString = "Aayush Vyas"; 

//  Let apply for-of-loop 
for(const indexValue of myString) {
    console.log(indexValue);
} 


//! Actually it was short hand as we compared with other loops like for-loop, while-loop or do-while loop because where we iterate on the index of array or string. 