//! Indepth Discussion on Fullfilment and Rejection Handler
// With the help of indepth discussion on fullfilment and rejection handler

//* generateRandomInt
function generateRandomInt(value) {
  return Math.floor(Math.random() * value);
}

//* Create the promise object .....
function generatePromiseWithTimeout() {
  return new Promise(function (resolve, reject) {
    let num = generateRandomInt(10);

    setTimeout(function () {
      if (num % 2 === 0) {
        resolve(num);
      } else {
        reject(num);
      }
    }, 1000);
  });
}

console.log("Starting .....");
const response = generatePromiseWithTimeout();
console.log("We are waiting for the promise to complete......");
console.log("Currently my promise object be like.....  ", response);
//? Lets register multiple promise handlers
console.log("Going to register my 1st set of handler....");

//? Handler first 
//* Consuming the promises ....
response.then(
  function fullfilmentHandlerOne(value) {
    console.log("Promise Resolve with fullfilmentHandlerOne and the value was : ", value);
    console.log("The state of promise object after resolve with fullfilmentHandler ", response);
  },
  function rejectionHandlerOne(value) {
    console.log("Promise Reject with rejectionHandlerOne and the value was ", value);
    console.log("The state of promise object after reject with rejectionHandler ", response);
  }
);

//? Handler second 
//* set of 2 handlers 
console.log("Going to register my 2nd set of handler.....");
//* Consuming the promises ..... 
response.then(function fullfilmentHandlerSecond(value) {
    console.log("Promise Resolve with fullfilmentHandlerSecond and value was : ", value);
    console.log("The state of promise object after resolve with fullfilmentHandler ", response);

}, function rejectionHandlerSecond(value) {
    console.log("Promise Reject with rejectionHandlerSecond and value was : ", value); 
    console.log("The state of promise object after reject with rejectHandlerSecond ", response); 

}); 

//! Here we understand that when we use multiple .then() than multiple handlers than this multiple handlers was regsiter to this onFullFilment and onRejection array respectively. 

for(let i = 0; i <= 100000000000; i++) {
    //* Do loop processing.... 
}; 

console.log("For Loop was ended !!!!"); 

console.log("Ending......");


//? As a said we can register multiple handler after registration and we know that promise object saved the four things :
//* 1st. value
//* 2nd. State of Promise
//* 3rd. onFullfilment Array in which have multiple function [f1,k]
//* 4th. onRejection Array in which have multiple function [f1,g]

//! Understand the use of micro-task queue : 
// This handlers onFullfilmentHandlers and onRejection array function handlers are stored in micro-task queue. 

//*    Micro-task queue 
//    _________________________________________________________________
//    | fullFilmentHanler| onRejection  |onfullFilment  | onRejection | 
//    |   One            |  One         | Second        | Second      |
//    |__________________|______________|_______________|_____________|   
//? This handlers after the promise object was saved inside the micro-task queue 
