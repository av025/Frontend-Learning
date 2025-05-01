//! Problem Solving - Minimum of Three 
//* Consider three integer value and find out minimum value among the three given input value 

//* input one : 
let numberOne = 10; 
let numberTwo = 20; 
let numberThree = 6; 

//* input two : 
numberOne = 10; 
numberTwo = 3; 
numberThree = 100;

if(numberOne < numberTwo && numberOne < numberThree) {
    console.log("number one was minimum value among the three given value");
}else if (numberTwo < numberThree && numberTwo < numberOne) {
    console.log("number two was minimum value among three given value");
}else {
    console.log("number three was minimum value among the three given value");
} 


