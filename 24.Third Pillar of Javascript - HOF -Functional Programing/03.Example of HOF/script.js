//! Example of High Order Function 
//* Let see more example of HOF Methods which was associated with array 

const array = [1,2,3,4,5,6,100, 599, 699, 456, 789,  7 , 8 , 455, 1000]; 
//? Initalize the array 
console.log(array);


const sortedArray = array.sort(); 
console.log(sortedArray);  
/** 
 *  [
  1, 100, 1000,   2,   3,
  4, 455,  456,   5, 599,
  6, 699,    7, 789,   8
]
 *  This was not in sorted form correctly it means that this sorting in lexicographical form means it  that sorting was done by ASCII implementation order.

* ye lexicographical ( means dictionary order) like this 
*  0 --> A 
*  1 --> B 
*  2 --> c 
* Like this we implement that in dictionary order..... 
* Here the implementation was done in Alphabetical order or we say ASCII order  
*/





