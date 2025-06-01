//! Lets test our understanding of promise
//* Task
//* 1st. Write a function to download data from a url
//* 2nd. Write a function to save that downloaded data in a file and return the file name
//* 3rd. Write a function to upload the file written in previous step a newurl
//? In this task we have to implment this function with the help of callback function only !!!!!

function download(url, callback) {
  console.log("Downloading data from the url ", url);
  setTimeout(function processDownloading() {
    console.log("Download Completed after 5 seconds ");
    let downloadContent = "Movie";
    callback(downloadContent);
  }, 5000);
}

function writeFile(data, callback) {
  console.log("Starting writing a file with ", data);
  setTimeout(function write() {
    console.log("Completed writing the data in a file ");
    const filename = "filename.txt";
    callback(filename);
  }, 6000);
}

function uploadFile(url, filename, callback) {
  console.log(`Start uploading ${filename} on ${url}`);
  setTimeout(function () {
    console.log("upload completed !!!");
    const response = "success";
    callback(response);
  }, 8000);
}

//! Below we create the Callback Hell 

download("www.xyz.com", function processDownloading(content) {
  console.log("We are going to process the downloaded data ", content);
  writeFile("Spiderman Home Coming", function processWriteFile(filename) {
    console.log("We have downloaded and written the file, now we will upload ");
    uploadFile(
      "www.uploadFile.com",
      filename,
      function processUploading(response) {
        console.log("We have uploaded with ", response);
      }
    );
  });
});
