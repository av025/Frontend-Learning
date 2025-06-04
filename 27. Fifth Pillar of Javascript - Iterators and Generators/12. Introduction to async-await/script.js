//! Introduction to async-await
//* Let understand async-await with the help of example

function download(url) {
  console.log("Downloading from the url ", url);

  return new Promise(function executer(resolve, reject) {
    setTimeout(function downloading() {
      console.log("Downloading completed after 6 sec");
      const data = "Aayush";
      resolve(data);
    },6000);
  });
}

function writeFile(data) {
  console.log("Writing the file with data ", data);
  return new Promise(function executer(resolve, reject) {
    setTimeout(function wiriting() {
      console.log("Completed writing the data in a file");
      const filename = "filename.txt";
      resolve(filename);
    }, 4000);
  });
}

function uploadData(filename, url) {
  console.log("Uploading file ", filename, " on ", url);
  return new Promise(function executer(resolve, reject) {
    setTimeout(function uploading() {
      console.log("Uploading Completed");
      const response = "SUCCESS";
      resolve(response);
    }, 2000);
  });
}; 

//* Here we use async-await keyword  
//? When we use async keyword than it indicate that this function have some asynchronous code activity 
async function step() {
    console.log("Starting");
    // const downloadedData = await 10; 
    //! When we use await 10, it works similarly to yield 10 in the sense that it pauses the function execution, returns control externally, and later resumes from where it was paused, inserting the resolved value (like 10) into the awaiting variable. Just like yield 10 pauses the generator and resumes with a value passed via iterator.next(value), await pauses the async function and resumes with the value returned from the resolved Promise.
   const downloadedData = await download("www.xyz.com"); 
    //? So here we use await keyword which means wait upto this promise object state was not change into resolve or rejct 
    console.log("Data download is: ", downloadedData); 
    const fileWritten = await writeFile(downloadedData); 
    console.log("File written is:", fileWritten);
    const dataUpload = await uploadData(fileWritten , "www.upload.com"); 
    console.log("Data uploaded : ", dataUpload); 
    
    return dataUpload; 
    //! Here in this function all the promises will resolve or reject sequentialy and wait upto current or previous promise object resolved or rejected 
};

console.log("Outside");
step();  

//! One thing we have to understand that whenever we create async function than this function was promise-based function it return promise or if we return the primitive value than it wrap inside the promise and return as resolve promise as that primitive value. 

async function exampleAsync() {
    return "Aayush"
}; 

console.log(exampleAsync()); //? Promise { 'Aayush' } 
//* As we say that it return promise always as resolve promise 

//* Output was : 
// Downloading from the url  www.xyz.com
// Downloading completed after 6 sec
// Data download is:  Aayush
// Writing the file with data  Aayush
// Completed writing the data in a file
// File written is: filename.txt
// Uploading file  filename.txt  on  www.upload.com
// Uploading Completed
// Data uploaded :  SUCCESS


