//! How Promises Resolve the Problem of Callback
//* As we know that with callback functions we have some issues and those issue are :
// 1. Inversion of Control
// 2. Callback hell or Callback DOOM

//? Lets understand those problem with the help of examples :

//* Write the callback function
function download(url, callback) {
  console.log("Starting Downloading our content");
  setTimeout(function executer() {
    console.log("Completed Downloading after 5 Seconds")
    const content = "ABCDEF";
    //* Here in the calling the callback function the main problem start begin which was inversion of callback 
    //* Case One :  Mistakely you don't call the function than whatever we want to download it never downloaded.
    // callback(content);
    //* Case Two : Bymistake we call our download() callback multiple times than whatever we want to download it's download multiple times 
    // callback(content);
    // callback(content);
    //! So this Inversion of Code Problem was create by the Callback that we don't have authority to use call the callback function and another was callback Hell or Callback DOOM which create the problem of readability. 
    
  }, 5000);
};

download("www.somethingdownload.com", function processDowload(data) {
  console.log(`Downloaded data is ${data}`);
});



