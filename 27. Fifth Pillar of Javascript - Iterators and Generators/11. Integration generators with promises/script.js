//! Integration of Generators with Promises
//* This example demonstrates how we can integrate generator functions with promises


//? 1. Download function that returns a promise
function download(url) {
  return new Promise(function executer(resolve, reject) {
    console.log("Start downloading from the URL:", url);
    setTimeout(function downloading() {
      console.log("Download completed after 6 seconds");
      const data = "Aayush";
      resolve(data); // Simulating downloaded data
    }, 6000);
  });
}

//? 2. Write file function that returns a promise
function writeFile(data) {
  return new Promise(function executer(resolve, reject) {
    console.log("Started writing a file with:", data);
    setTimeout(function writing() {
      console.log("Completed writing the data in a file");
      const filename = "filename.txt";
      resolve(filename); // Simulating file creation
    }, 5000);
  });
}

//? 3. Upload function that returns a promise
function uploadData(file, url) {
  return new Promise(function executer(resolve, reject) {
    console.log("Started uploading", file, "to", url);
    setTimeout(function uploading() {
      console.log("Uploading completed");
      const response = "SUCCESS";
      resolve(response); // Simulating successful upload
    }, 2000);
  });
}

//? Recursive function to handle each resolved promise and resume the generator
function doAfterReceiving(value) {
  let future = iterator.next(value); // Pass the resolved value back into generator
  if (future.done) return; // If generator is complete, stop recursion
  future.value.then(doAfterReceiving); // Wait for next promise, then call recursively
}

//? Generator function that yields promises and waits for their resolution
function* steps() {
  const downloadedData = yield download("www.xyz.com"); 
  console.log("Data downloaded is:", downloadedData);

  const fileWritten = yield writeFile(downloadedData);
  console.log("File written is:", fileWritten);

  const uploadResponse = yield uploadData(fileWritten, "www.upload.com");
  console.log("Upload Response is:", uploadResponse);

  return uploadResponse; // Final result
}

//? Start the generator execution
const iterator = steps(); // Get the generator object
const future = iterator.next(); // Start the first step (returns a promise)
future.value.then(doAfterReceiving); // Kick off the recursive promise flow

//! That's how we integrate the Generator Function with Promise 

//! In JavaScript, there is a mechanism called async-await which allows us to write asynchronous code in a synchronous-like manner by chaining Promise results.

//! In the above example, we manually created a custom version of this mechanism using generator functions and promises, where each yield waits for the previous promise to resolve before continuing.
