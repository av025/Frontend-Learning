//! Filter HOF Array Method
//* filter() is a Higher-Order Function (HOF) available on arrays.
//? It loops through each element of the array and returns a new array containing only the elements that satisfy the condition provided in the callback function.
//? The callback must return a boolean:
//? If it returns true, the element is included in the new array.
//? If it returns false, the element is excluded.

//! If we return non-boolean value it try to convert into Boolean value

//* Let understand filter dunction with the help of example :
const arrayOfNum = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const evenNumArr = []; 
const oddNumArr = []; 

arrayOfNum.filter(function(value) {
    if(value % 2 === 0) {
        return evenNumArr.push(value);
        //* Pushing even number in evenNumArr []
    }else {
        return oddNumArr.push(value); 
        //* Pushing odd number in oddNumArr []
    }
}); 


console.log(evenNumArr); //? [2, 4, 6, 8, 10, 12, 14]
console.log(oddNumArr); //? [ 1, 3, 7, 9, 11, 13]