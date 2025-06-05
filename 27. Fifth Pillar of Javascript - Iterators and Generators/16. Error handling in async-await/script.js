//! Error Handling in async-await 
//* Let understand how we handle error in async-await function 

function download(url) {
    console.log("Downloading data from url ", url);
    return new Promise(function downloading(resolve, reject){
     setTimeout(function processDownloading(){
        console.log("Download Completed in 6 seconds"); 
        const data = "Movie"; 
    //    resolve(data);
          reject(data);
     }, 6000)

    });
}; 


//? Inside the async-await function we used the try-catch block which help to do error-handling in async-await  

async function fetchData() {
    //* Now the code which get response back from the promises or asynchronous code aur fetch in data from api was writtent inside the try block and catch block handle the error if we get any to change state of promise and fetching data from api 
    try {
        const downloadedData = await download("www.xyz.com"); 
         console.log("Downloded Data ", downloadedData);

         return downloadedData; 
    }catch(error) {
        console.log("Error we got: ", error); 
    }finally{
        console.log("function Executed Completely ");
    }; 

    //* Here in error-handling there was finally block also which help to indicate the execution of function or process was completed if the state was resolved or rejected  
};


fetchData();