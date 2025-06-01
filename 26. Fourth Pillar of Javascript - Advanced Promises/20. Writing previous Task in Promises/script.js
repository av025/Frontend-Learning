//! Writing Previous Task in Promises
//* Task
//* 1st. Write a function to download data from a url
//* 2nd. Write a function to save that downloaded data in a file and return the file name
//* 3rd. Write a function to upload the file written in previous step a newurl

function download(url) {
  console.log("Downloading data from ", url);
  return new Promise(function executer(resolve, reject) {
    setTimeout(function downloading() {
      console.log("Downloading Completed after 5 seconds");
      let data = "Movie";
      resolve(data);
    }, 10000);
  });
}

function writeFile(data) {
  console.log();
  return new Promise(function executer(resolve, reject) {
    console.log("Starting writing a file with a ", data);
    setTimeout(function writing() {
      console.log("Completed writing a data in a file ");
      let filename = "filename.txt";
      resolve(filename);
    }, 5000);
  });
}

function uploadFile(url, filename) {
  return new Promise(function executer(resolve, reject) {
    console.log(`Start uploading ${filename} on ${url}`);
    setTimeout(function uploading() {
      console.log("upload completed !!!");
      const response = "success";
      resolve(response);
    }, 2000);
  });
}


download("www.xyz.com").then(function processDownloading(value) {
    console.log("Downloading done with following value ", value);
    return writeFile(value);
}).then(function processWriting(value) {
 console.log("Data written in a file with value ",value);
 return uploadFile("www.upload.com",value); 
}).then(function processUploading(value) {
   console.log("We have uploaded with ", value);
}); 



