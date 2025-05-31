//! Predict the Output of Promise 2 

function fetchData(url) {
    return new Promise(function executer(resolve,reject){
        console.log("Started Downloading  the url, ",url);
        setTimeout(function processDownloading() {
            let data = "Downloading Data";
            resolve(data);
            console.log("Download Complete");
        },7000);
    });
};


console.log("Starting........");
let promiseObject = fetchData("https://URL.com");
promiseObject.then(function success(value){
    console.log("Value is ", value);
});
console.log("Ending");

//! Understand the Flow of Code : 
//* 1. console.log("Starting........");     // Prints first
//* 2. fetchData("https://URL.com") is called
//*    - console.log("Started Downloading the url, ...")  → prints immediately
//*    - Promise created: state = "pending", value = undefined
//*    - setTimeout callback (processDownloading) is registered → will go to macrotask queue after 7 seconds
//* 3. .then(success) is attached immediately → the callback is registered for future execution (microtask queue) once the promise is resolved
//* 4. console.log("Ending");               // Prints third

//? ---- after 7 seconds ----
//* 5. setTimeout callback (processDownloading) runs:
// *   - `data = "Downloading Data"` created
//*    - `resolve(data)` called → promise is fulfilled, `.then()` handler is queued in **microtask queue**
//*    - `console.log("Download Complete")` runs immediately after resolve (synchronously)
//* 6. Microtask queue now runs `.then(success)` → logs: `Value is Downloading Data`


//! Output of the Code : 
/**
 * Starting........
 * Started Downloading  the url,  https://URL.com
 * Ending
 * Download Complete
 * Value is  Downloading Data
 */


