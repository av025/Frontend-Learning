//! Deep dive in async function 
//* Let understand more about async function 


function download(url) {
    console.log("Downloading data from url:", url);

    return new Promise(function executer(resolve, reject) {
        setTimeout(function downloading() {
            console.log("Download completed after 5 seconds");
            const data = "Movie";
            resolve(data);
        }, 5000);
    });
}

async function processDownloading() {
    // Await pauses execution until the Promise resolves
    const downloadedData = await download("www.xyz.com");

    // We can either return the data or use it directly
    // return downloadedData;  // async function always returns a Promise
    console.log(downloadedData); // Output: Movie (after 5 sec)
}

// Option 1: use .then()
// const response = processDownloading();
// response.then(function success(value) {
//     console.log(value); // Output: Movie
// });

// Option 2: just call async function (logs inside function)
processDownloading();



//! Key Concepts of async function:

//? 1️. We can only use `await` inside an `async` function.
//?    If we use it outside, JavaScript throws a SyntaxError.

//? 2️. Every `async` function automatically returns a Promise.
//?    Even if you return a primitive value like a string or number,
//?    it is wrapped in a resolved Promise.

//     Example: 
//     async function fn() { return 5; }
//     fn() => Promise {<fulfilled>: 5}

//? 3️. If there’s no `await` inside the async function,
//?    the function executes **synchronously**.

//?    But the moment `await` is encountered:
//?    - Execution pauses at that point
//?    - JavaScript engine exits the async function
//?    - It registers onFulfillment / onRejection handlers
//?    - These handlers are scheduled in the micro-task queue
//?    - Once the awaited Promise is resolved or rejected,
//?       the async function resumes execution from where it paused.
 