//! Promise-based function to simulate download
function download(url) {
    console.log("Downloading data from url", url);

    return new Promise(function executor(resolve, reject) {
        setTimeout(function downloading() {
            console.log("Download Completed after 6 seconds");
            const data = "Movie";
            resolve(data);
        }, 6000); // 6 seconds delay
    });
}

//! Promise-based function to simulate writing a file
function writeFile(data) {
    console.log("Writing File with data", data);

    return new Promise(function executor(resolve, reject) {
        setTimeout(function writing() {
            console.log("Writing File Completed");
            const filename = "filename.txt";
            resolve(filename);
        }, 4000); // 4 seconds delay
    });
}

//! Promise-based function to simulate uploading data
function uploadData(filename, url) {
    console.log("Uploading File", filename, "on", url);

    return new Promise(function executor(resolve, reject) {
        setTimeout(function uploading() {
            console.log("Uploading Completed");
            const response = "Success";
            resolve(response);
        }, 2000); // 👈 Missing earlier — fixed to 2s delay
    });
}

//! Async function to run the full process step-by-step
async function step() {
    console.log("Starting Step");

    const downloadedData = await download("www.xyz.com");
    console.log("Downloaded Data:", downloadedData);

    //! Best practice: avoid chaining await like this multiple times — use Promise.all if downloading multiple

    const writingFile = await writeFile(downloadedData);
    console.log("Writing Filename completed", writingFile);

    const uploadDataResponse = await uploadData(writingFile, "www.drive.google.com");
    console.log("Upload data", uploadDataResponse);

    return uploadDataResponse;
}

//! Kickstart the async process
step().then(function (value) {
    console.log("We have completed steps with:", value);
});

//! Global synchronous code
console.log("Outside");

for (let i = 0; i < 1000000000; i++) {
    // Heavy loop to block main thread
}

console.log("For Loop done");

setTimeout(function timer() {
    console.log("Timer Completed !!!!");
}, 4000);
