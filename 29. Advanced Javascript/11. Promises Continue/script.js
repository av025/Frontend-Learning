//! Promises Continue

//? As we understand that when we have to consume the promise we used the .then() handler as we know that thins .then() handler takes two callback argument and also return the new promise also let understand that with example :

/** 
const promiseObjectOne = new Promise(function executer(resolve, reject) {
  console.log(
    "Executer Callback execute with the help of Promise constructor."
  );
  setTimeout(function () {
    const randomValue = Math.floor(Math.random() * 100);
    if (randomValue % 2 === 0) {
      resolve(randomValue);
    } else {
      reject(randomValue);
    }
  }, 3000);
});

const promiseObjectTwo = promiseObjectOne.then(
  function onFulfillmentHandler(data) {
    console.log("Promise Resolve ", data); 

    return "Aayush Vyas";  
    //* Here we are returning the resolve string 
  },
  function onRejectionHandler(data) {
    console.log("Promise Reject ", data);
  }
).then(function onFulfillmentHandlerTwo(value) {
    console.log(value); 
    //* Here output value was "Aayush Vyas"
});

*/

//? Error Handling in the Javascript
//* So for Error Handling we use try-catch block

/**const promiseObject = new Promise(function executer(resolve, reject) {
  console.log("Executer Callback execute by Promise Constructor");
  setTimeout(function inner() {
    const randomValue = Math.floor(Math.random() * 100);
    try {
      if (randomValue % 2 === 0) {
        resolve(`Promise resolve ${randomValue} `);
      }
    } catch (error) {
        reject(`Promise Rejected ${randomValue} `);
    }
  }, 6000);
}); 

promiseObject.then(function onFulfillmentHandler(data) { 
    console.log(data); 
}, function onRejectionHandler(data){
    console.log(data);
})
*/ 



