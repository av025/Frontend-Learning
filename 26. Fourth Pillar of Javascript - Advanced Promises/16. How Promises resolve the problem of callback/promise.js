//! How Promise Resolve the Problem of Callbac Function 
//* Let see the example of promise 

function download(url) {
    return new Promise(function executer(resolve, reject) {
        if(typeof url === "string") {
            console.log("Starting Download our Content"); 
            setTimeout(function processDownloading() { 
                console.log("Completed Downloading after 5 sec "); 
                let content = "ABCDEF";
                resolve(content);
      
            },5000)
        }else {
            reject({success:false , message:"Internal Server Error !!!!"});
        };
    });
};


//* The Callback problem was resolve by the Promise Constructor Syntax only we call the function directly without giving the access to other that the promise object wasa resolve or reject so we have the access of it and second we can also check the state of our promise also if it was in pending or resolve or rejected.

//* Unlike callbacks, Promises let us separate the declaration of the async logic and its handling. Once a Promise is returned, we can attach .then() for success and .catch() for failure, making the code much cleaner.

download("1234").then(function success(value) {
    console.log("Downloaded  was complete and data is ", value);
}, function failure(value) {
    console.log("Download was failed due to ", value.message);
});

