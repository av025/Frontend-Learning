//! Reduce HOF Function
/** 
 * The reduce() method is a Higher-Order Function (HOF) that takes a callback function as an argument and reduces all the elements of an array to a single value (e.g., sum, product, etc.).

 The callback function typically takes two main parameters:

    - accumulator → holds the result of the previous computation it was not compulsory to give as parameter

    - currentValue → the current element being processed

reduce() can also take an initial value as a second argument. If the initial value is provided, it is used as the starting value of the accumulator. If not provided, the first element of the array is used as the initial accumulator, and iteration starts from the second element.
*
 */

//? Syntax of filter function
//*  filter((accumulator , initialValue) => {
//*    //  Work to do......
//*    return accumulator + intiialValue;
//*
//*  })

const myArr = [22, 44, 55, 66, 77, 88, 99, 110];
//* initialize the myArr

const totalArrValue = myArr.reduce((accumulator, initialValue) => {
  return accumulator + initialValue;
  //? accumulator keps the previous addition value
  //? Here the initialValue takes from array element
}, 0); //* passing accumulator value 0 which was our previous value to help process  our reduce method on array

console.log(totalArrValue); //* Output : 561 

const anotherTotal = [12, 16, 20, 24].reduce((previousValue, initialValue) => {
  //? If we don't pass the accumulator than previousValue was taken as first element and initialValue was taken as second element of array 
  return previousValue + initialValue; 
});

console.log(anotherTotal); //* Output : 72 