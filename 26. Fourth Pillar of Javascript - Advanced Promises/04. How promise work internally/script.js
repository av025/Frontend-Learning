//! How Promise work Internally 
//* Let understand with example that how Promises work internally lets write some code to understand how it work 

// generateRandomNum function 
function generateRandomNum(max) {
    return Math.floor(Math.random() * max); 
}; 

//* Create Promise 
function getPromiseWithTimeout() {
    return new Promise(function(resolve, reject) { 
        console.log("Entering the executer callback in the promise callback"); // Execute 2 
        let num = generateRandomNum(10); 

        setTimeout(function() {
            if(num % 2 ===0 ) {
            
                resolve(num);
            }else {
                reject(num);
            }
        },6000);
       console.log("Exit the executer callback in the promise callback") // Execute 3 
    });
}; 

console.log("Starting .......");  // Execute 1 
const response = getPromiseWithTimeout(); 
console.log("We are waiting for promise to complete.......");  // Execute 4 
console.log("Currently my Promise Object was look like this !!!!", response); // Execute 5 

response.then(function success(value) {
    console.log("Promise Resolve the value was : ", value); 
    console.log("Promise state after the resolving : ", response);
}, function reject(value) { 
    console.log("Promise reject the value was : ", value); 
    console.log("Promise state after the rejection : ", response); 

}); 


//! Again we create the Javascript Runtime Architecture and add another queue which was micro-queue 

//?                               Javascript Runtime Enviornment 
//     _________________________________________________________________________________________
//     |                                                                                       |
//     |    Javascript Execution Machine                                                       |
//     |   _______________________________                                                     | 
//     |   |                              |                                                    | 
//     |   |                              |                                                    | 
//     |   |______________________________|                                                    | 
//     |                                                                                       | 
//     |    Call Stack Memory                               Callback queue                     | 
//     |                                               ____________________________            |
//     |    |_______________|      Event loop          |      |         |          |           |  
//     |    |_______________|   --------------->       |      |         |          |           | 
//     |    |_______________|   <--------------        |______|_________|__________|           | 
//     |    |_______________|                                                                  | 
//     |                                                                                       | 
//     |    //? There was another queue which                                                  |
//     |    //? was micro-task queue or Job queue                                              |
//     |   Micro-task or Job queue                                                             | 
//     |     _____________________________________                                             | 
//     |     |          |             |           |                                            | 
//     |     |__________|_____________|___________|                                            | 
//     |_______________________________________________________________________________________| 



//? As we know that whenever we create the promise it have two main things : 
//* 1st. value which was undefined 
//* 2nd. State of our promise 
//* 3rd. onFullFilment  : [f1,g] This was array and inside this array there will be have multiple function.
//* 4th. onRejection : [h1,k]  This was array and inside this array there will be have multiple function.
//! In promise this two thing was also maintain first was onFullFilment and onRejection array in which have multiple functions respectively and when the promise was created this function help when it was resolve or rejected. 


//! This was the entry point to understand how promise work internally 
//? Now on the base of Fullfilment of promise or rejection of promise what two things we can do we aatach the function from onFullFilment and onRejection and we know that we can attach with the help of .then handler we can attach fullfilment handler and rejection handler respectively.  

//?  Promis Object handle all this 4 things 
//   __________________________________ 
//  | 1.  value                        |
//  | 2.  Promise  State               |
//  | 3. onFullfilement : [f1,g]       | 
//  | 4. onRejection    : [g1,k]       |
//  |__________________________________|

//*  In the Memory we create the Call-stack 

//  |                                       |
//  |                                       |
//  |                                       |
//  |                                       | 
//  |                                       | 
//  |_______________________________________| 
//  |   getPromiseWithTimeout()             | 
//  |_______________________________________|
//? This getPromiseWithTimeout() func was called first in callStack 
// function getPromiseWithTimeout() { 
//! Promise object was created !!!!!! 
// ! In which default value was undefined and State was Pending As we know that promise was also the native to js code 
//     return new Promise(function(resolve, reject) { 
//         console.log("Entering the executer callback in the promise callback");  Execute 2 
//!          First this console.log was executed....... 
//         let num = generateRandomNum(10);  
//? Than this generateRandom() function comes in to the callStack Memory 
//         setTimeout(function() {
//?        This setTimeout() function was saved in callback queue 
//             if(num % 2 ===0 ) {
            
//                 resolve(num); 
//? If the promise state was resolve than function was used from onFullFilment array which was handle in promise memory. 
//             }else {
//                 reject(num);
//? If the promise state was reject than function was used from onRejection array which was handle in promise memory.
//             }
//         },6000);
//        console.log("Exit the executer callback in the promise callback")  Execute 3 
//     });
// }; 


//! After the successful or unsuccessful promise object creation we attach the function handler to .then callback function to access the value we got from promise object.  

//? 1.) We have to understand that the Promise constructor is synchronous in nature. The operations we run inside it (like setTimeout, fetch, etc.) can be asynchronous.

//? 2.) The handlers we attach afterward using .then(), .catch(), or .finally() are also asynchronous, meaning they run in the microtask queue after the current call stack is empty.

