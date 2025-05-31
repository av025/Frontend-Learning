//! Event Loop and Micro-task queue
//* Let explain event loop and micro-task queue with example :

function consumePromise() {
  return new Promise(function executer(resolve, reject) {
      
      setTimeout(function() {
        console.log("Rejecting the Promise !!!");
        reject("Done")
    },1000);
  });
}

setTimeout(function () {
  console.log("Timer Ended !!!!");
},0);

const response = consumePromise();

console.log("Starting........");
response.then(
  function fullfilmentHandlerOne(value) {
    console.log("Fullfilment handler one with value ", value);
  },
  function onRejectionHandlerOne(value) {
    console.log("rejection handler one with value ", value);
  }
);

response.then(
  function fullfilmentHandlerSecond() {
    console.log("Fullfilment handler second with value ", value);
  },
  function rejectionHandlerSecond(value) {
    console.log("Rejection Handler second with value ", value);
  }
);

for(let i =0; i < 10000000000; i++) {
    // Processing the loop 
}

console.log("Ending......."); 


//! Output was : 
/**
 * 
 * Starting......
 * Resolving the Promise !!!!
 * Ending !!!
 * FullfilHandler with value  Done
 * Timer Completed !!!!
 * 
 */


//! Here the Macro-task queue was executed because the setTimeout function of Macro-task have 0 milli-seconds and setTimeout() of Micro-task have the 1sec so that's why it was executed later because it was not resolve or rejected because it was wrap inside the setTimeout function so event loop have the first priority on the micro-task only but that promises handler was not registered so it was event-loop execute the macro-task function first so continously check both the micro-task and macro-task queue. 






