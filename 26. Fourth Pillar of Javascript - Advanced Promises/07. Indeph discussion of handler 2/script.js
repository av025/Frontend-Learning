//! Indepth Discussion of Handler 2

//* generateRandomInt func
function generateRandomInt(value) {
  return Math.floor(Math.random() * value);
}

//* Create the Promise Constructor
function generatePromiseWithTimeout() {
  return new Promise(function (resolve, reject) {
    console.log("Entering the Executor callback of promise");
    let num = generateRandomInt(10);

    setTimeout(function () {
      if (num % 2 === 0) {
        resolve(num);
      } else {
        reject(num);
      }
    },0);
    console.log("Exit the executor callback of promise");
  });
}

console.log("Starting.........");
const response = generatePromiseWithTimeout();
console.log("Waiting for complete the promise.......");
console.log("Currently my Promise Object be like......", response);

console.log("Creating the promise handler set-1");
//* Creating first promise handler set-1  and consume the promise object
response.then(
  function fullfilmentHandlerOne(value) {
    console.log(
      "The Promise Resolve with fullFilment handler One and value : ",
      value
    );
    console.log("Promise Object State after the resolving ", response);
    // setTimeout func
    setTimeout(function () {
      console.log("Timer Ended in 0 sec");
    }, 0);
    //! This setTimeout Function was executed at the last because of its asynchronous function
    console.log("Exiting the fullfilment Handler One");
  },
  function rejectionHandlerOne(value) {
    console.log(
      "The Promise Reject with rejection handler One and value : ",
      value
    );
    console.log("Promise Object State after the rejection ", response);
    // setTimeout func
    setTimeout(function () {
      console.log("Timer Ended in 0 sec");
    }, 0);
    //! This setTimeout Function was executed at the last because of its asynchronous function
    console.log("Exiting the rejection handler One");
  }
);

console.log("Creating the promise handler set - 2");
//* Consuming the promise again with handler second
response.then(
  function fullfilmentHandlerSecond(value) {
    console.log(
      "The Promise Resolve with fullFilment handler second and value : ",
      value
    );
    console.log("Promise Object State after resolviing ", response);
  },
  function rejectionHandlerSecond(value) {
    console.log(
      "The Promise Resolve with fullFilment handler second and value :  ",
      value
    );
    console.log("Promise Object State after the rejection ", response);
  }
);

//! So this .then() multiple handlers was register in the onFullFilment and onRejection array respectively

console.log("Ending........."); 

setTimeout(function() {
  console.log("Global Timer 0 sec")   
}, 1000);


//! As we know that the promise object save the four things
//* 1st. value
//* 2nd. Promise Object State
//* 3rd. onFullfilment Array
//* 4th. onRejection Array
