//! Inversion of Control
//* Let understand inversion of control with the help of callback example

//? Let's create array and use sort() callback function

const myNumericArray = [22, 11, 99, 1, 12, 45, 100, 5];
//* intialize the numeric-array

// Now apply sort function on it with comparator
const sortedArray = myNumericArray.sort(function cmp(a, b) {
  return a - b;
});

//? Let's think one important point that in this sort function we call the comparator function so we have 100 percent surety that callback always call when we call it ?? So, here we sure because it was inbuilt function.
console.log(sortedArray);

//* Let's Assume that if we create our own any feature in which The Team A will create the main function and Team B create the callback function which we consume in main function.

// let demonstrate with proper case-study ;
//? Let we create dummy feature of education-tech if the course was purchase than served the course access

//* This purchase checker was written by Team A
function isCoursePurchased(callbackFn, booleanValue) {
//   callbackFn(booleanValue);
  // We are consuming this callBackFn inside this isCoursePurchased which was create by Team B
//   callbackFn(booleanValue);
//   callbackFn(booleanValue);
callbackFn(booleanValue);
  //? Now here if any one comment out this callback function or by-mistake call twice so the feature was written by team B was not work according to the need of our bussiness so that harm  the bussiness of an organization. 
 
//! Whenever we passing the callback function to the Higher Order function so we have the authority to the HOF function that how it consume it means the callback function written by yourself and the usage and consumation given to other and they don't use that properly than it harm our chaining features this call the Inversion of control which was one of the disadvantage of callback fn

}

function accessCourse(booleanValue) {
  if (booleanValue) {
    console.log("User has Access of course");
  } else {
    console.log("Please Purcase the course Trial period was over");
  }
}

isCoursePurchased(accessCourse, true);
isCoursePurchased(accessCourse, false);


//! What is Inversion of Control ?
//? In a typical program, you control the flow (you decide what runs and when).
//? With callbacks, you give control to another function or team.
//? This means your code (callback) is called by someone else (the main function).
//? You no longer control when, how often, or even whether your code runs.
//? This loss of control is called Inversion of Control.


