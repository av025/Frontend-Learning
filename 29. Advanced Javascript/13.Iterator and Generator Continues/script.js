//! Iterator and Generators Continues 
//* More example on Iterators and Generators 
/**

function download(url) {
    return new Promise(function executer(resolve, reject) { 
        console.log("Started downloading data from ",url); 
    setTimeout(function downloading(){
        console.log("Download Completed after  3 seconds"); 
        const data = "Confidential Data"; 
        resolve(data);
    }, 3000); 
}); 
}; 


function writeFile(data) {
    return new Promise(function executer(resolve, reject){
        console.log("Writing file with ", data); 
        setTimeout(function writing(){
            console.log("File writing completed ");
            const fileName = "filename.txt";
            resolve(fileName); 
        },2000); 
    }); 
}; 


function upload(filename , newUrl) {
    return new Promise(function executer(resolve, reject) {
        console.log("Uploading the file ",filename, " at ", newUrl); 
        setTimeout(function uploading(){
            const response = "Success"; 
            resolve(response); 
        },1000); 
    }); 
}; 


function* execute() {
    const downloadedData = yield download("http://www.xyz.com"); 
    console.log("Data Downloaded is", downloadedData); 
    const fileResponse = yield writeFile(downloadedData); 
    console.log("File Name is ",fileResponse); 
    const uploadResponse = yield upload(fileResponse, "http://www.upload.com"); 
    
    return uploadResponse; 
}; 


const iterator = execute(); 
const iteratorObject = iterator.next(); 
//* Attaching the .then() fun to the value 
iteratorObject.value.then(function downloadProcess(value){
    console.log(value); 
    
    //* Again calling the next() function 
    const futureTask  =  iterator.next(value); //* Next yield value was writeFile function  
    if(futureTask.done) return;  //* Validation check when all iterable value was iterated than return undefined 
    
    futureTask.value.then(function writingProcess(value){
        console.log(value);    
        
        const anotherTask = iterator.next(value); 
        if(anotherTask.done) return; 
        anotherTask.value.then(function uploadingProcess(value){
            console.log(value);
        })
    });  
    
});  

//? The implementation we done with generator function same we do with async and await keyword function also 

async function executeAgain() { 
    //* So with the help of async function we can execute this function as synchronous because this async function was promise based function 
    const downloadedData = await download("www.download.com");
    console.log("Downloaded Data ",downloadedData); 
    const writingData = await writeFile(downloadedData); 
    console.log("Filename is ",writingData); 
    const uploadData = await upload(writingData, "www.download.com"); 
    console.log(uploadData, "File Uploaded");
    
    return uploadData;
}; 

executeAgain();
*/ 

//? Now we have to understand some points on a asyn-await keyword functions 
//* 1st. We will  used the await keyword inside only insde the aync function only if we use with another fetature than it give error to us. 
//* 2nd. async function always return the promise object the conclusion was async-await function are promise based 
//* 3rd. When we returning the non-promise value like object, string , number etc. so async function convert that non-promise value than it create promise and make it fullfiled promise. 
//* 4th. When we used the await keyword same like yield we come outside the async function and execution was pause and waiting that promise was resolve or reject. 






