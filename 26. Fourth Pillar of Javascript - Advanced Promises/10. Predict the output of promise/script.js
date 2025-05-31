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

//! So the Flow of the execution was --------> fetchData() "global call-stack"  ---------> setTimeout function "Macro-task queue" --------> processingDownload() ---------> .the() handler success "Micro task queue"


