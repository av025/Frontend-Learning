//! Predict the output of promise 

function fetchData(url) {
    return new Promise(function executer(resolve,reject){ 
        console.log("Started Downloading from url ,", url); 
        setTimeout(function processDownloading() { 
          let data = "Dummy Data"; 
          console.log("Download Completed");
          resolve(data);

        },7000);

        
    })
}

console.log("Start");
let promiseObject = fetchData(" url we want");
promiseObject.then(function success(value){ 
    console.log("Value is ", value);

});
console.log("Ending"); 

//! Output : 
/**
 *  Start 
 *  Started Downloading from url, url we want 
 *  Ending 
 *  Download Completed 
 *  Value is Dummy Data 
 */ 


//! Understand how this code was execute : 
/**
 * -  In call-stack first fetchData("url we want")  stored. 
 * -  In fetchData we will see that we create new Promise Object which value was undefined , state was pending and onFullfilment[] and onRejection[] array are empty whenever the promise state changes all the handlers associate with it was register and stored in micro-task queue.
 * - After that setTimeout function was stored in Macro-task queue which we call callback-queue which have callback function processingDownload and timer was 7sec . 
 *  - in which the callback function processingDownload  in which we create the data variable and it's value was "Dummy Data"  than here we call the resolve callback handler which change the promise state 
 *  after that .then() handler to consume promise register the success handler in the micro-task queue but it execute after the timer function setTimeout because promise value was undefined that time that's why 
 */ 


//! Flow of Code 
//! fetchData() → global call stack
//! → setTimeout() registered → goes to Timer System → Macrotask queue (waits 7 sec)
//! → After 7 sec, processDownloading() is pushed to call stack from Macrotask queue
//! → Inside processDownloading(), resolve(data) is called → Promise is fulfilled
//! → .then(success) callback is scheduled in the Microtask queue
//! → Microtask (then) is executed after the current macrotask finishes


