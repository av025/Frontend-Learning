//! Second Example of Async code
//? Always understand that the Synchronous code always executed first and the process of asynchronous operation does not block the synchronous code. After all the synchronous and global code execute than asynchronous code run !!!!. 
 
function consumingTimeByLoop() {
  console.log("Starting Loop Process !!!");
  for (let i = 0; i <= 1000000000; i++) {
    //* Loop Processing
  }

  console.log("Stop Looping Process !!!!");
}

function consumingTimeByRuntimeFeatureZero() {
  console.log("Start the processing of runtime feature Zero");
  setTimeout(function () {
    for (let i = 0; i < 1000000000; i++) {
      //* Loop Processing
    }

    console.log("Stop Runtime feature Zero");
  }, 5000);
}; 


function consumingTimeByRuntimeFeatureFirst() {
   console.log("Start the processing of runtime feature First"); 
   setTimeout(function () {
    console.log("Stop Runtime feature First !!!!");
   }, 0); 
}; 


function consumingTimeByRuntimeFeatureSecond() {
    console.log("Start the processing of runtime feature Second"); 
    setTimeout(function() { 
        console.log("Stop Runtime feature Second !!!!")

    },200)
}; 


console.log("Start"); 
consumingTimeByLoop(); 
consumingTimeByRuntimeFeatureZero(); 
consumingTimeByRuntimeFeatureFirst();
consumingTimeByRuntimeFeatureSecond(); 
consumingTimeByLoop();
console.log("End !!!!");



