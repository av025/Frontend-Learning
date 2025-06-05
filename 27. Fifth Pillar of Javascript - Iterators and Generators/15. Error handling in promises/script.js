//! Error Handling in Promises

//* Let's understand how we handle errors in promises using examples

function download(url) {
  console.log("Downloading data from the url", url);

  return new Promise(function executer(resolve, reject) {
    setTimeout(function downloading() {
      console.log("Download completed in 6 seconds");
      const data = "Movie";
      reject(data); // Rejecting instead of resolving
    }, 6000);
  });
}

function writeFile(data) {
  console.log("Writing file with data", data);

  return new Promise(function executer(resolve, reject) {
    setTimeout(function writing() {
      console.log("Writing the file with data", data);
      const filename = "filename.txt";
      resolve(filename);
    }, 4000);
  });
}

function uploadData(filename, url) {
  console.log("Uploading the file", filename, "on", url);

  return new Promise(function executer(resolve, reject) {
    setTimeout(function uploading() {
      console.log("Uploading completed");
      const response = "Success";
      resolve(response);
    }, 2000);
  });
}

/*
*  METHOD 1: Using `.then()` with both fulfillment and rejection handlers
* You can handle rejections at every step manually like this:
*/

// download("www.xyz.com")
//   .then(
//     function downloadProcessing(value) {
//       console.log("Downloaded data", value);
//       return writeFile(value);
//     },
//     function downloadRejected(error) {
//       console.log("Download Rejected:", error);
//     }
//   )
//   .then(
//     function writeProcessing(value) {
//       console.log("Writing file with data", value);
//       return uploadData(value, "www.upload.com");
//     },
//     function writeRejected(error) {
//       console.log("Write Rejected:", error);
//     }
//   )
//   .then(
//     function uploadProcessing(value) {
//       console.log("Upload Success:", value);
//     },
//     function uploadRejected(error) {
//       console.log("Upload Rejected:", error);
//     }
//   );

/*
* // But there's a problem with this method:
* If you handle errors inline like above, the chain continues even after rejection.
* You’d have to throw the error again manually to stop the chain.
* That's why Method 2 is preferred in real-world code.
*/

/*
* ✅ METHOD 2: Using `.catch()` for centralized error handling
* This approach automatically stops the chain if an error is thrown or a promise is rejected.
*/

download("www.xyz.com")
  .then(function downloadProcessing(value) {
    console.log("Downloaded data", value);
    return writeFile(value);
  })
  .then(function writingProcessing(value) {
    console.log("Writing file with data", value);
    return uploadData(value, "www.upload.com");
  })
  .then(function uploadingProcessing(value) {
    console.log("Upload Success:", value);
  })
  .catch(function handleError(error) {
    console.log("Error occurred:", error); // Handles any rejection from the chain
  })
  .finally(function finalStep() {
    console.log("Function execution finished (success or error).");
  });

/*
*  .finally() will always execute no matter whether the promise was resolved or rejected.
* It is mostly used for cleanup tasks or indicating that the process is finished.
*/


