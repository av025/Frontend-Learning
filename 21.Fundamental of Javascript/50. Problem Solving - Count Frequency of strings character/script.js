//! Problem Solving - Count Frequency Of Strings Character
//* Given a String, try to print no. of occurences of each unique character of a string. 




const countFrequencyOfCharacter = (inputString) => {
let frequencyChecker = {};  //* Create frequencyChecker object 

//* Adding and checking string frequency logic 
for(const char of inputString) {
  if(frequencyChecker[char]) {
        frequencyChecker[char] += 1; 
    }else {
        frequencyChecker[char] = 1; 
    }
} 

console.log(frequencyChecker); 

} 

countFrequencyOfCharacter("Aayush Vyas");