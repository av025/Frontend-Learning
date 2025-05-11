//! Problem Solving - DNF Algorithm "Dutch National Flag"
//? Given an array which only contain 0 & 1 the data in shuffled randomly, write a function that can rearrange the data such that all the 0's are present before 1.

//* input  : [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1]
//! output : [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]

function swap(passingArray, i, j) {
  let temp = passingArray[i];
  passingArray[i] = passingArray[j];
  passingArray[j] = temp;
}

function separate(inputArray) {
  let i = 0;
  let j = inputArray.length - 1;

  while (i < j) {
    if (inputArray[i] == 1) {
      swap(inputArray, i, j);
      j--;
    } else {
      i++;
    }
  }
}


//* Creating array
const array = [1, 1, 1, 0, 1, 0, 1, 0, 0];

separate(array); //* It arrange our array in increasing order

console.log(array);
