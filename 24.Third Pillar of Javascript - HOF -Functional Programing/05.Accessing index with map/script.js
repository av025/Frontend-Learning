//! Accessingg index of element with map method

//* Let see with example how can we access the index of variable with javascript :

const array = [2, 4, 6, 8, 10, 12, 14, 16];

//* Let create the function to print index and element of our array
function print(value, index) {
  return `At index ${index} of array element was ${value} `;
}
//? This function take two input first was value and second was index

//* Let use map function to access that index of array value :
const infoOfArr = array.map(print);
//! When we pass the function as an argument to map array method than first parameter was array value , second parameter was index and third parameter was array itself to access elements , index-value from an array 

//! This map method start looping and iterating index value and index number from array

console.log(infoOfArr); //* It returns the index & value of array

const arraySecond = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];

//* Let understand with more clearity 
const accessValueOfArr = arraySecond.map(function (value, index , arr) {
   return  `Element : ${value} , Array index-number : ${index}, Array : ${arr} `;
}); 

console.log(accessValueOfArr);
