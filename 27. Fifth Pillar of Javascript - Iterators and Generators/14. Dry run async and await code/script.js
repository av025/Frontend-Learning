//! Dry run async and await code

//? Global Scope Execution Start

//* Declare the download function 
function download(url) {
  console.log("Download data from url ", url);
  //? This returns a new Promise object
  return new Promise(function executer(resolve, reject) {
    setTimeout(function downloading() {
      console.log("Download Completed after 6 seconds");
      const data = "Movie";
      resolve(data); //? Promise fulfilled with value "Movie"
    }, 6000); //? This callback goes to macro-task queue after 6 seconds
  });
}; 

//* Declare the writeFile function 
function writeFile(data) {
  console.log("Writing File with data ", data);
  return new Promise(function executer(resolve, reject) {
    setTimeout(function writing() {
      console.log("Writing the file with data ", data);
      const filename = "filename.txt";
      resolve(filename); //? Fulfilled with filename
    }, 4000); //? Goes to macro-task queue after 4 seconds
  });
}; 

//* Declare the uploadData function 
function uploadData(filename, url) {
    console.log("Uploading the file ", filename , " on ", url);
    return new Promise(function executer(resolve, reject) {
     setTimeout(function uploading() {  
        console.log("uploading completed");
        const response = "Success";
        resolve(response); //? Fulfilled with "Success"
     },2000); //? Goes to macro-task queue after 2 seconds
    });
}; 

//* Async function starts executing when called
async function step() { 
    console.log("Starting Steps");  //? Printed immediately
    const downloadedData = await download("www.xyz.com");
    //? At this point, function execution pauses until download() resolves
    console.log("Downloaded data ", downloadedData); 

    const fileWritten = await writeFile(downloadedData); 
    //? Pauses again until writeFile() resolves
    console.log("File writing completed in ",fileWritten);

    const dataUploaded = await uploadData(fileWritten , "www.upload.com"); 
    //? Pauses until uploadData() resolves
    console.log("Data Uploaded ", dataUploaded); 

    return dataUploaded; //? Final resolved value of step()
}; 

//* This starts executing first in global scope
step().then(function success(value) {
    //? Runs when async step() function is fully completed
    console.log("We have completed steps with ", value);
}); 

console.log("Outside"); //? Printed immediately after calling step()

//* This long loop will block main thread
for(let i = 0; i < 10000000000; i++) {
    //? Heavy synchronous processing — blocks the call stack
};

//* Timer function scheduled — will enter macro-task queue after 4 sec
setTimeout(function timer() {
    console.log("Timer Done");
}, 4000);

console.log("For Loop Done"); //? Printed after for loop completes

/* 
====================  FINAL EXECUTION FLOW OF CODE ====================

1️ Global execution starts
   - All function declarations are hoisted.
   - step() async function is called.

2️ Inside step()
   - Prints: "Starting Steps"
   - Hits first await → await download("www.xyz.com")
   - download() executes → Prints: "Download data from url www.xyz.com"
   - Inside download(), setTimeout schedules callback after 6s (macro-task queue)
   - step() function pauses here (returns a pending Promise)

3️ Global code resumes (step paused)
   - Prints: "Outside"
   - Enters heavy for loop (blocks call stack for some time)
   - After loop completes → Prints: "For Loop Done"

4️ Meanwhile:
   - Global setTimeout(..., 4000) completes after 4 seconds
   - Its callback goes to macro-task queue (but waits for micro-tasks)

5️ After 6 seconds:
   - download()'s setTimeout callback executes → Prints: "Download Completed after 6 seconds"
   - Resolves Promise with value "Movie"
   - Now, async function step resumes
   - Prints: "Downloaded data Movie"

6️ Next in step():
   - Hits await writeFile("Movie")
   - writeFile() executes → Prints: "Writing File with data Movie"
   - Schedules setTimeout callback after 4s (macro-task queue)
   - step() pauses again

7️ After 4 seconds:
   - writeFile's setTimeout executes → Prints: "Writing the file with data Movie"
   - Resolves Promise with "filename.txt"
   - step() resumes
   - Prints: "File writing completed in filename.txt"

8️ Next:
   - Hits await uploadData("filename.txt", "www.upload.com")
   - uploadData() executes → Prints: "Uploading the file filename.txt on www.upload.com"
   - Schedules setTimeout after 2s (macro-task queue)
   - step() pauses again

9️ After 2 seconds:
   - uploadData's setTimeout executes → Prints: "uploading completed"
   - Resolves with "Success"
   - step() resumes
   - Prints: "Data Uploaded Success"
   - step() completes and returns "Success"

 step().then(...) now runs:
   - Prints: "We have completed steps with Success"

 Finally:
   - Event Loop checks macro-task queue
   - Global setTimeout(..., 4000)'s callback (if not yet run) now executes
   - Prints: "Timer Done"

========================================================================
*/



