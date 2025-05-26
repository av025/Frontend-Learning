//! Examples of debugging async operations in JS 

//? In javascript first code in main-memory which was callstack memory in which we list all our main global and synchronous operation store and execute in LIFO manner in this call stack which means "Last in First out " 

//* The flow of code was top to bottom in javascript 

//* Example One : 

function consumingTimeByLoop() {
    console.log('Start the Loop'); 
    for(let i= 1; i< 10000000000; i++) {
        //* Looping process 
    };
    console.log("Loops executed !!!")
}; 


function consumingTimeByRuntimeFeature() {
    console.log("Start Runtime feature"); 
    setTimeout(function () {
        console.log("Runtime feature executed !!!")
    }, 5000); 
}; 


console.log("Start"); 

consumingTimeByLoop();
consumingTimeByRuntimeFeature();
//! Above asunchronous operation consumingTimeByRuntimeFeature have to wait upto loop sync function was not completed executed !!!!!
consumingTimeByLoop(); 

console.log("End"); 


//* Let understand how this code was executed 
//? Let's create Callstack Memory in which our all synchrnous and global native JS code executed !!!!! 
// |                                                 |      First execute last consumingTimeByLoop()
// |  consumingTimeByLoop()                          |     
// |    function consumingTimeByLoop() {             |     This JS Native code means understand by js engine 
// |      console.log('Start the Loop');             |       
// |      for(let i= 1; i< 10000000000; i++) {       |         JS execution Stop Here upto this looping process
// |             // Looping process                  |           was not completed because of single threaded 
// |           };                                    |
// |    console.log("Loops executed !!!")            |
// |    };                                           |
// |_________________________________________________|
// |                                                 |     Second execute consumingTimeByRuntimeFeature()
// |  consumingTimeByRuntimeFeature()                |
// |                                                 |      
// | function consumingTimeByRuntimeFeature(){       |    JS Engine Was Start Executing this function 
// |    console.log("Start Runtime feature");        |  
// |    setTimeout(function () {                     |   //! In this line it checks that this setTimeout() was 
// |      console.log("Runtime feature executed !!!")|   //! not a native JS Code So this was asynchronous code 
// |    }, 5000);                                    |  //! This code was perform there task and saved in 
// |   };                                            | //! query-queue 
// |                                                 |
// |_________________________________________________|
// |                                                 |      at last execute first consumingTimeByLoop()
// |  consumingTimeByLoop()                          |     
// |    function consumingTimeByLoop() {             |     This JS Native code means understand by js engine 
// |      console.log('Start the Loop');             |       
// |      for(let i= 1; i< 10000000000; i++) {       |         JS execution Stop Here upto this looping process
// |             // Looping process                  |           was not completed because of single threaded 
// |           };                                    |
// |    console.log("Loops executed !!!")            |
// |    };                                           |
// |_________________________________________________|
//!      LIFO "Last In First Out"  Pattern follow by CallStack 
//         ___
//          |        |
//          |        |   //? Event Loop 
//          |        | This Event loop was like a manager which keep tracking the main call-stack and Query-queue  
//          |        |  where we store the asynchronous code to be executed 
//          |       _|_  
//! Asynchronous code was execute after all the synchronous code executed and callstack become empty than one by one event loop send the asynchronous operation from query-queue to execute the asynchronous code  

//* Query Queue 
// Query Queue the queue where our asy code was stored temperory to execute after all the synchronous code. 
//?  _____________________________________________
//?  |                    |                      | 
//?  | setTimeout()       |  More Async code     | 
//?  |____________________|______________________| 


//? Demonstrate the structure of JS Runtime Engine 

//*                      Overview of  Javascript Runtime Enviornment
//               ______________________________________________________________________________________
//               |                                                                                    | 
//               |                      JS Engine                                                     |         
//               |     ----------------------------------------------------                           |
//               |     |                                                  |                           | 
//               |     |                                                  |       Broswer APIs        | 
//               |     |                                                  |                           |
//               |     |                                                  |                           | 
//               |     |                                                  |                           | 
//               |     |--------------------------------------------------|                           | 
//               |                                                                                    |
//               |    Call-stack                 Heap                                  Queue          | 
//               |     Memory                   Memory                                                | 
//               |____________________________________________________________________________________| 
