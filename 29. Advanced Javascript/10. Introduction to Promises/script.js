//! Introduction to Promises
//* In previous async code we create the callback functions
/*
function download(url, callbackFn) {
    console.log("Downloading Data from ",url); 
    setTimeout(function downloading() {
        console.log("Data Download after 6 seconds"); 
        const downlodedData = "Movie";
        callbackFn?.(downlodedData);
    }, 6000); 
}; 

function writeFile(downlodedData, callbackFn) {
    console.log("Writing File with Data ", downlodedData); 
    setTimeout(function writing(){ 
        console.log("Writing File completed"); 
        const fileName = "file.txt"; 
        callbackFn?.(fileName);
    }, 3000);
}; 


function upload(filename, url, callbackFn) {
    console.log("Upload the ", filename, " on ", url);
    setTimeout(function uploading(){ 
        console.log("Uploading Completed");
        const response = "Success"; 
        callbackFn?.(response); 
    }, 1000); 
}; 

function process() {
    download("www.xyz.com", function handleDownload(data) {
        writeFile(data, function handleWriting(status)  { 
            upload("file.txt", "www.upload.com", function handleUploading(uploadStatus)  {
                console.log(uploadStatus," All Done");
            });

        }); 
    }); 
};

process(); */

//* In above code we are using callback functions to implement our feature to download data from some url than write the file than after writing file upload the file on any server but as we know there was problem with callback and those are callback hell and Inversion of control.

// Instead of the callback function we mostly used the Promises

//? Promises are the special type of objects which control the future task or determine the future task .

//* To understand promises we have to understand two important things

//* 1st. How to create the promises
//? We can access the promise with the help of promise constructor and this promise constructor takes an callback function argument which was called the executer function.

//* Why we are using the executer Callback ?
//? Because when we create our promise object at that point of time, our constructor will execute this callback. and this callback executer was execute by the Promise constructor.

//? This executer callback takes two parameter and those are res & rej res means resolve and rej means reject and this two parameter are also function.

//* Example of Promise

// const promiseObject = new Promise(function executer(res, rej) {
//   for (let i = 0; i < 1000000000000; i++) {
//* Processing of for loop
//   }

//   console.log(
// "Executer Callback function execute by the Promise Constructor !!!!"
//   );
// });

// console.log("Created the promise object ", promiseObject);
//! One thing to understand that the Promises are the native code of Javascript

//* How this promise object look like ?
//? The promise Object have some multiple properties :
//? 1st. Promise State :
//? So Promise also maintain it's state also to determine the future task progress
//? a. Pending State : this promise state was default state which was pending it means that promise are doing the processing.
//? b. Resolve or Fulfilled : this promise state acknowledge that the promise was resolved and state becomes fullfilled
//? c. Reject : this promise state acknowledge that the promise don't fullfilled your request so that's why it was repesent with Reject state.

//* Example One
/**
 * 
const promiseObjectSecond = new Promise(function executer(resolve, reject) {
    console.log("Callback Executer trigger by the Promise Constructor");
    const randomValue = Math.floor(Math.random() * 100);
    
    if (randomValue % 2 === 0) {
        resolve(randomValue);
    } else {
        reject(randomValue);
}
});  
*/

// console.log(promiseObjectSecond);

//* Example Two :
/**
 * 
const promiseObjectThird = new Promise(function executer(resolve, reject){
    console.log("Callback Executer trigger by the Promise Constructor");
    setTimeout(function() {
        const randomValue = Math.floor(Math.random() * 100); 
        if(randomValue % 2 === 0) {
            resolve(randomValue)
        }else {
            reject(randomValue);
    };
});
}); 
*/

//? 2nd. Promise Value :
//* With promise object the value was also assoicated with it whenever the promise state changes the promise object return value also....
//* When we console our promiseObjectThird than when the promise was resolve it print the fulfillment value also  with it...
// console.log(promiseObjectThird);

//? 3rd. Promise maintain one Hidden Array of properties also and which was onFulfillment:[] and onRejection:[] they was not accessible by developers.
//* onFulFilement:[] and onRejection:[] arrays are managed by promises and initial are empty.
//* We can store some function in both of these arrays and stored with the help of .then()/.catch() method which was given by promise object when our promise created.
//* With the help of both methods we can register functions as per the promise state when this registered function was stored in a onFullfilment or onRejection array now this onFullfilement or onRejection was stored inside the micro-task queue.

//* 2nd. How to consume the promises
//? One thing we have to understand that promises are act as an placeholder object for the future returning value.
//* Once the future task execution was done than we might to do execute the algorithms.

//? with the help of .then() we can consume the promise object mainly
console.log("Start"); 
const promiseObjectOne = new Promise(function executer(resolve, reject){
    console.log("Executer callback execute by the promise constructor of promiseObjectOne");
    setTimeout(function promiseCallback(){ 
        console.log("Timer One Ended");
        resolve("Aayush Vyas");
    }, 1000)
})

setTimeout(() => {
  console.log("Timer Ended");
}, 3000);

const promiseObject = new Promise(function executer(resolve, reject) {
  console.log("Executer callback execute by the promise constructor promiseObject");
  setTimeout(function promiseCallback() {
    const randomValue = Math.floor(Math.random() * 100);
    if (randomValue % 2 === 0) {
      resolve(randomValue);
    } else {
      reject(randomValue);
    }
  }, 6000);
});

//* Let's consume our promises with the .then() handler to only register our handler into onFulfillment array or onRejection array and inside the .then() we passed two argument also first one was success for resolve state and failure function for rejection state. 
promiseObject.then(
  function onFulFilementOne(data) {
    console.log("Promise Value ", data);
  },
  function onRejectionOne(data) {
    console.log("Promise Value ", data);
  }
);

promiseObject.then(function onFullfilementTwo(data){
    console.log("Promise Value ",data);
}, function onRejectionTwo(data){
    console.log("Promise Value ",data);
});  

promiseObjectOne.then(function onFullfilement(data){
    console.log("Promise Value ", data);
});

for(let i = 0; i < 10000000000; i++) {}; 
for(let i = 0; i < 10000000000; i++) {}; 

console.log("End");