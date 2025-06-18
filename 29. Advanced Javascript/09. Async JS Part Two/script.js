//! Async JS Part Two

//* Let see some example of async code

// function createTimer(timer, timerId) {
//   console.log(`Creating a new timer with Id ${timerId}`);
//   setTimeout(() => {
// console.log(`Timer ${timerId} is done`);
//   }, timer);
//   console.log(`Successfully created a new Timer with id ${timerId}`);
// };

// console.log("Starting the code");
// createTimer(2000, 1);
// createTimer(20, 2);

// console.log("Starting the Looping Process");

// for(let i = 0; i < 10000000000; i++) {
// Processing the Loop
// };

// console.log("Looping process End ");

//* Output :
/**
 * Starting the code
 * Creating a new timer with Id 1
 * Successfully created a new Timer with id 1
 * Creating a new timer with Id 2
 * Successfully created a new Timer with id 2
 * Starting the Looping  Process
 * Looping process End
 * Timer 1 is done
 * Timer 2 is done
 */

//? Now in above code the question arise that how the setTimeout func can access the local variable of createTimer because createTimer was execute and setTimeout was execute with some delay because it was async code than how he can access the local variables of it's outer function and that was 

//* Let see another example
// function fun(c, d) {
//   let m = 10;
//   function gun() {
    // let x = 99;
    // console.log(`Addition of m and c is ${m + c}`); 
    //? Here how we can access the m variable in gun function when outer fun function was executed. 
    //! Closures are a mechanism in JavaScript where a function can access variables from its lexical scope, meaning it can access variables declared in its parent (outer) function, even after the parent function has finished executing. This happens because the inner function "remembers" the variables from its outer scope, forming a closure.
    //* In closures only variable remember which was used inside the inner- function. 
//   }
//   return gun;
// }

// const g = fun(8, 5);
// g(); //* Output : Addition of m and c is 18 

//? As we know that there was some disadvantages with Callback Function and the problem was Callback Hell and Inversion of Control so this problems are solve with the help of Promises. 

//! Promises in Javascript 
// The Promises are native code of javascript it solve the main problem of Inversion of Control and also solve the some point of problem of callback hell also so instead of Callback function we used the promises. 

//? What is Promise ? 
//* promises are the readability enchancer, Promise are the special object which helps to control  the future related task. 

//* In Promise we have to understand two things : 
//? 1st. How to create the promise. 
//? 2nd. How to consume the promise. 


/** 
 *  Implement a set of dummy functions which can mimic the behaviour of the following functions : 
 *  1. download --> This function should mimic downloading of some content from a url. 
 *  2. writFile --> This function should mimic the writing of the downloaded content to a file. 
 *  3. uploadFile --> This function should be mimic the uploading file to a server. 
 * 
 *  Now if we've implement all of this functions, try to use them in a scenario where we first download a file than write it to disk and than upload it to the server.  
 */

function download(url, callbackFn) { 
    console.log("Downloading data from ", url); 
    setTimeout(function downloading() {
        console.log("Data Downloaded after 3 seconds") 
        const downloadedData = "ABCDEFG"; 
        callbackFn?.(downloadedData); 
        //* Here we do optional chaining if the function was not present it give output undefined 

    }, 3000);
};


function writeFile(downloadedData , fileName,  callbackFn) { 
    console.log("Writing File with data ",downloadedData);
    setTimeout(function writing(){
        console.log("Writing the file ", fileName, " is done.");
        callbackFn?.();

    }, 2000); 
    
}; 


function upload(url, fileName, callbackFn) {
    console.log("Uploading file ", fileName, " to ", url); 
    setTimeout(function uploading() {
        console.log("Upload is done");
        let uploadSuccess = "Success"; 
        callbackFn?.(uploadSuccess);
    },1000);
}

function process() {
    download("www.xyz.com", function handleDownload(data) {
        writeFile(data, "file.txt", function handleWriting(status)  { 
            upload("file.txt", "www.upload.com", function handleUploading(uploadStatus)  {
                console.log("All Done");
            });

        }); 
    }); 
};

process();