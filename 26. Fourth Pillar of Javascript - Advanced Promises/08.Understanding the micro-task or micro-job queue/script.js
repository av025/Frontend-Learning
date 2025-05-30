//! Understanding the Micro-task or Micro-Job queue
//* Let understand how micro-task queue work with example

function createPromise() {
  return new Promise(function executer(resolve, reject) {
    console.log("Resolving the Promise !!!!");
    resolve("Done");
  });
}; 


setTimeout(function process() {
    console.log("Timer Completed !!!!"); 
});


console.log("Starting......"); 
const response = createPromise(); 
// console.log(response); 

response.then(function fullfilHandler(value) { 
    console.log("FullfilHandler with value ", value); 

}, function rejectionHandler(){
});


console.log("Ending !!!");  

//? Output of this code : 
//* Starting..... 
//* Resolving the Promise !!!! 
//* Ending !!! 
//* FullFilHandler with value Done 
//* Time Completed !!!!  

//! So whenever the promise was resolve or reject this onFullfilment and onRejection array handlers are executed after some time it never immediately executed does not matter if the code was asynchronous or synchronous. 

//? Actually what happen that this onFullfilment or onRejection handlers are stored inside this micro-job or micro-task queue 

//*  Micro-task queue 
//  ___________________________________________________________________________
//  |onFullfilmentHandlerOne |onRejectionHandlerOne | onFullfilmentHandlerTwo |                              
//  |________________________|______________________|_________________________|
//  | onRejectionHandlerTwo  |
//  |________________________|

//?  Event Loop prepare the micro-task queue and  Event loop was also check the global call-stack was clear or not if clear than add this function of onFullfilement array and onRejection array handlers to execute the function after the promise state changes. 


//? One thing we have to understand that if the global call stack was empty and the function was stored in callback-queue which was also called the "Macro-task queue" and another queue was called the micro-task queue and here event-loop takes preference to micro-task queue so we see in output that micro-task queue  execute first than macro-task queue execute there function that store inside it. 












