//! Higher Order Function
//* Let see array functions with the help of example

const myArray = [1, 4, 6, 8, 10];

//* lets print myArray in console
console.log(myArray);

//? Lets check the typeof array
console.log(typeof myArray); //* Output : Object only
//* In javascript the type of array was object so it was kind of object
//* We assume that index of array as key and it's Index-value was value
//* ["abc", "def", "ghi"] ----> We can assume that as in the term of object {1:"abc", 2:"def", 3:"ghi"}

//? We can do operation on array with this higher order function or method which was associated with array
//* Let understand those inbuild HOF Methods of Array :-

//* 1st. map HOF Method
// - map was higher order function available with arrays
// - It takes a function as an argument --> f
// - it returns an array in which every value is actually populated by calling function f with original array element as argument.

//? Syntax of map method - [].map(argument-function) --> It takes argument-function

//* Let see example of map method
const arrayOfNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//* square function
function squareOfNumber(number) {
  return number * number;
};

//* cube function
function cubeOfNumber(number) {
  return number * number * number;
}; 

//* evenOrOddNum
function evenOrOddNum(inputNumber) { 
    if(inputNumber % 2 === 0) {
        return "Even";
    }else {
        return "Odd";
    }

}

//* using map method
const squareOfArrEle = arrayOfNumber.map(squareOfNumber);
console.log(squareOfArrEle);
//* Output :
//  [
//    1,  4,  9, 16,  25,
//   36, 49, 64, 81, 100
// ]

const cubeOfArrEle = arrayOfNumber.map(cubeOfNumber); 
console.log(cubeOfArrEle);
//? [    1,    8,  27,  64,  125,  216, 343, 512, 729, 1000  ] 

const evenAndOdd = arrayOfNumber.map(evenOrOddNum);  //* This map function return the number was 'Even' and 'Odd' 
console.log(evenAndOdd); 


//! Conclusion : 
//! map is a Higher-Order Function (HOF) that takes a function as an argument. It returns a new array where each element is the result of applying the provided function to each element of the original array. We can manipulate or process the original data inside that function.  
