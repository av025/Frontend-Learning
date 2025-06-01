//! Dot then chaining 
//* Example to understand dot-then chaining (Promise chaining)

function download(url) {
  return new Promise(function executer(resolve, reject) {
    if (typeof url === "string") {
      setTimeout(function () {
        console.log("Download completed after 5 seconds");
        let content = "Something Downloaded";
        resolve(content);
      }, 5000);
    } else {
      reject({ success: false, message: "Internal Server Error" });
    }
  });
}

const response = download(123);

// .then() returns a new promise, which allows chaining multiple .then() calls.
response.then(function fullFilmentHandlerOne(value) {
    console.log("Downloaded successfully with handler One. Value:", value);
    return "New Promise String"; //! Here we return the new resolve Promise string value 
}, function rejectionHandlerOne(error) {
    console.log("Download failed with handler One. Error:", error.message);
}).then(function fullFilmentHandlerTwo(value) {
    console.log("Chained promise executed. Value:", value);

    // Even though we returned a string, .then() wraps it into a resolved Promise,
    // so we can chain another .then() if we want.
});







