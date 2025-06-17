//! Async Javascript Part One

//* Callback and Higher Order Functions in Javascript

//? What are callback functions
// When we are passing functions as an argument to other function than those function are called the callback functions.

// const myArr = [1, 2, 3, 4, 5, 6];

// const mappedArr = myArr.map(function callback(indexValue) {
//   return indexValue * 2;
// });

// console.log(mappedArr);

//? This Callback function are also come as an category of Higher Order Function.

//? What is Higher Order Functions ?
//* In javascript the functions are first clss member and they can adapt some special features to become Higher Order Functions.

//* 1st. Functions returning another function.
//* 2nd. Functions pass an argument to other function.

//? Let's create custom map function
// function customMap(myArr, callbackFn) {
//   let resultedArr = [];
//   for (let i = 0; i < myArr.length; i++) {
    // resultedArr.push(callbackFn(myArr[i]));
//   }

//   return resultedArr;
// }

//* Do sqaure of the Array element
// console.log(
//   customMap([1, 2, 3, 4, 5, 6], function g(element) {
//     return element ** 2;
//   })
// );

//? This g was callback function here in this customMap()

//? Disadvantages of Callback function

//* 1st. Callback hell
// When we used multiple callback function than it create the readability problem because we are passing lot of functions an argument that create callbackhell or CallbackDOOM for us to understand

//* example of callback hell or callback DOOM
/** 
 * 
function a(b) {
    console.log("function a");
    b();
}

a(function b() {
    console.log("function b");
    
    c(function d() {
        console.log("function d");
    });
    
    e(function f() {
        console.log("function f");
    });
});

function c(d) {
    console.log("function c");
    d(e);
}

function e(f) {
    console.log("function e");
    f();
}
*/

//* This Callback function was the problem with callback function and mainly problem was of readability and it was main disadvantage also but there was another problem with the callback was "Inversion of control" which was bigger problem as we compare to this callback hell problem.

//? Inversion of Control
//* The Inversion of control was also the problem with this callback function so main problem here that the authoraity of any feature you create was given to another let understand with example

//? Suppose one team create payment system if the user pay for the course than they will get the access for any course
// function paymentFeature(course, accessFeature) {
//   if (course === "frontend") {
    //* Case One : If the First Team can't use our higher order function and application was deploy on production than it create problem because user purchase the item but don't get access
    // accessFeature(course)
    //* Case Two : If by mistake the team A call two times than it assign to times that also break our application
    // accessFeature(course);
    // accessFeature(course);
    //? So this problem was called the inversion of control we can't have the authority of our own function and that was used by other.
//   } else {
    // console.log(`Please purchase the ${course} course first `);
//   }
// }

//? Second Team create feature after payment user access the course
// function accessFeature(course) {
//   console.log(`You Purchase ${course} course`);
// }

// paymentFeature("frontend", accessFeature);

//? Asynchronous Programming
//* The programming was done by two type one was synchronous and asynchronous way in synchronous way all the code  was execute line by line one by one  in sequence  but in asychronous  way the code was execute after some time and here the order was not matter and execution code was also not in sequential matter.

//* If we talk about nature of javascript than it was synchronous in nature every line of javascript code was executed line by line.

// console.log("Start");

// Let see the nature of javascript
// for (let i = 0; i < 10000000000; i++) {
  // do some processing in the loop
// }

// console.log("First loop executed !!!");

// for (let i = 0; i < 10000; i++) {
  // do some processing in the loop
// }

// console.log("Second Loop Executed !!!");

// console.log("End");

//? This above code of javascript was executed line by line in synchronously and javascript was synchronous because it was single threaded language means that only one task perform at a time so that's why js code executed line by line.

//! Async nature of Javascript
//* Let understand the async nature of javascript

//? There was timer function in javascript which was not native code of javascript it was provided by runtime enviornment of javascript. Javascript was not that strong type of language in nature most of the features in javascript provided by runtime enviornment.

//! One thing keep in the mind that Asyn code in javascript was executed by all the native code executed than javascript execute asynchornous code of javascript.

//* setTimeout function : the setTimeout function was the timer function which executed after some delay of mili-seconds.
// setTimeout(function callbackFn() {
//   console.log("Timer Ended");
// }, 5000);
//* This setTimeout function takes two argument first was callback function and time in mili-seconds " 1seconds = 1000 mili-seconds".

//* the feature of console was also not native in javascript that console feature was also provide by runtime enviornment. 

//* Let debug how this synchronous and asychronous code execute together : 

// console.log("Start"); 

// setTimeout(function callbackFn() {
//    console.log("Time Ended");
// },6000); 

// for(let i = 0; i < 100000000; i++) {
    // do some processing 
// }; 

// console.log("Loop executing complete"); 

//* In above code first native js code was executed and the async code was processing and wait into macro-queue or callstack after all our native code execute in synchronous code than the asynchronous code setTimeout function executed.  

//* Debug this code : 

console.log("Start");

setTimeout(function callbackFn(){
    console.log("First Timer Ended")
}, 6000); 

setTimeout(function setTimeout() {
    console.log("Second Timer Ended");
}, 2000); 

for(let i = 0; i < 1000000000; i++) {
    //* Do some processing 
}; 

console.log("For Loop Executed !!!"); 

console.log("End"); 

//! Explain the above code by debuging and from tommorrow start video from 2:39:00 
