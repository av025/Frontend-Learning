//! Promises Continue

//? As we understand that when we have to consume the promise we used the .then() handler as we know that thins .then() handler takes two callback argument and also return the new promise also let understand that with example :

/** 
const promiseObjectOne = new Promise(function executer(resolve, reject) {
  console.log(
    "Executer Callback execute with the help of Promise constructor."
  );
  setTimeout(function () {
    const randomValue = Math.floor(Math.random() * 100);
    if (randomValue % 2 === 0) {
      resolve(randomValue);
    } else {
      reject(randomValue);
    }
  }, 3000);
});

const promiseObjectTwo = promiseObjectOne.then(
  function onFulfillmentHandler(data) {
    console.log("Promise Resolve ", data); 

    return "Aayush Vyas";  
    //* Here we are returning the resolve string 
  },
  function onRejectionHandler(data) {
    console.log("Promise Reject ", data);
  }
).then(function onFulfillmentHandlerTwo(value) {
    console.log(value); 
    //* Here output value was "Aayush Vyas"
});

*/

//? Error Handling in the Javascript
//* So for Error Handling we use try-catch block

/**const promiseObject = new Promise(function executer(resolve, reject) {
  console.log("Executer Callback execute by Promise Constructor");
  setTimeout(function inner() {
    const randomValue = Math.floor(Math.random() * 100);
    try {
      if (randomValue % 2 === 0) {
        resolve(`Promise resolve ${randomValue} `);
      }
    } catch (error) {
        reject(`Promise Rejected ${randomValue} `);
    }
  }, 6000);
}); 

promiseObject.then(function onFulfillmentHandler(data) { 
    console.log(data); 
}, function onRejectionHandler(data){
    console.log(data);
})
*/
/**
 * 
const promiseObject = new Promise(function executer(resolve, reject) {
  console.log("Executer Callback triger by Promise Constructor");

  setTimeout(function inner() {
    const randomValue = Math.floor(Math.random() * 100);
    if (randomValue % 2 === 0) {
      resolve(randomValue);
    } else {
      reject(randomValue);
    }
  }, 3000);
}); 
*/

//? So in promises we have to handle exception when promises was rejected upto we handle in the .then() handler but there was another handler .catch() which mainly used for promise rejection.
/**
 * 
promiseObject.then(function(value) {
  console.log("Promise Resolve ",value);
}).catch(function(value) {
  console.log("Promise Reject ", value);
});
*/

/**
 *  Let create the Feature of Download , writeFile and upload with the help of Promise
 */

function download(url) {
  return new Promise(function executer(resolve, reject) {
    if (typeof url === "string") {
      console.log("Started Downloading data from ", url);
      setTimeout(function downloading() {
        console.log("Data Downloaded after 3 seconds");
        const data = "Some Data";
        resolve(data);
      }, 3000);
    } else {
      reject({ success: false, message: "invalid url" });
    }
  });
};

function writeFile(data) {
  return new Promise(function executer(resolve, reject) {
    if (typeof data === "string") {
      console.log("Writing File with data ", data);
      setTimeout(function writing() {
        console.log("Writing File was completed");
        const fileName = "filename.txt";
        resolve(fileName);
      }, 2000);
    } else {
      reject({ success: false, message: "Internal Server Error" });
    }
  });
};

function upload(fileName, newUrl) {
  return new Promise(function executer(resolve, reject) {
    if (typeof newUrl === "string") {
      console.log("Uploading the file ", fileName, " to ", newUrl);
      setTimeout(function uploading() {
        const response = "Success";
        resolve(response);
      }, 1000);
    } else {
      reject({ success: false, message: "Invalid Url" });
    }
  });
};
console.log("Start");
//? Consume the promises
download("http://downloadfromsomething.com")
  .then(function downloadProcessing(value) {
    console.log("Download Completed :", value);
    //* This .then() return the promise Object 
    return writeFile?.(value);
  })
  .then(function writingProcess(value) {
    console.log("Writing File Name :", value);
  //* This .then() return the promise object 
    return upload?.(value, "http://www.upload.com");
  })
  .then(function uploadProcessing(value) {
    console.log(value, " Uploading completed");
  }).catch(function error(value) {
    console.log(value);
  });
//? This was called the .then() chaining of Promises 
console.log("End");

