// Example promise function for downloading with delay
function download(url, time) {
  console.log("Downloading data from URL:", url);

  return new Promise(function executor(resolve, reject) {
    if (typeof url === "string") {
      setTimeout(function downloading() {
        console.log(`Download completed after ${time / 1000} seconds`);
        const data = "Movie One";
        resolve(data);
      }, time);
    } else {
      reject("Internal Error: URL must be a string");
    }
  });
}

function downloadTwo(url, time) {
  console.log("Downloading data from URL:", url);

  return new Promise(function executor(resolve, reject) {
    if (typeof url === "string") {
      setTimeout(function downloading() {
        console.log(`Download completed after ${time / 1000} seconds`);
        const data = "Movie Two";
        resolve(data);
      }, time);
    } else {
      reject("Internal Error: URL must be a string");
    }
  });
}

function downloadThree(url, time) {
  console.log("Downloading data from URL:", url);

  return new Promise(function executor(resolve, reject) {
    if (typeof url === "string") {
      setTimeout(function downloading() {
        console.log(`Download completed after ${time / 1000} seconds`);
        const data = "Movie Three";
        resolve(data);
      }, time);
    } else {
      reject("Internal Error: URL must be a string");
    }
  });
}

// Create three promises
const promiseOne = download("www.downloadOne.com", 6000);
const promiseTwo = downloadTwo("www.downloadTwo.com", 8000);
const promiseThree = downloadThree("www.downloadThree.com", 2000);

// Using Promise.all()
// All promises must resolve; if any one fails, the entire Promise.all fails
const allPromise = Promise.all([promiseOne, promiseTwo, promiseThree]);

allPromise
  .then(function onSuccess(values) {
    console.log("All downloads completed:");
    console.log(values); // Array of all resolved values
  })
  .catch(function onError(error) {
    console.log("Error occurred in one of the promises:");
    console.log(error); // First rejection reason
  });

// Using Promise.any()
// Returns first successfully resolved promise; ignores rejections unless all fail
const anyPromise = Promise.any([promiseOne, promiseTwo, promiseThree]);

anyPromise
  .then(function onSuccess(value) {
    console.log("First successful download:");
    console.log(value);
  })
  .catch(function onError(error) {
    console.log("All promises were rejected:");
    console.log(error);
  });

// Using Promise.allSettled()
// Returns status and result for every promise regardless of resolve or reject
const testPromises = [
  Promise.resolve(1),
  Promise.reject("Failed to fetch"),
  Promise.resolve(3),
];

const allSettled = Promise.allSettled(testPromises);

allSettled.then(function onAllSettled(results) {
  console.log("Status of all promises:");
  console.log(results);
});

/*
Output format of Promise.allSettled:
[
  { status: 'fulfilled', value: 1 },
  { status: 'rejected', reason: 'Failed to fetch' },
  { status: 'fulfilled', value: 3 }
]
*/
