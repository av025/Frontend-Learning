//! Using Promise dot solve
//* Let understand Promise.resolve() function with the help of example

//  Code Example :-

console.log("Start of the file");

setTimeout(function timerOne() {
  console.log("Timer One Ended");
}, 0);

for (let i = 0; i < 10000000000; i++) {
  //* Looping process
}

let x = Promise.resolve("Aayush's promise !!!!");
//! This Promise.resolve()  was inbuilt function of Promise object which was implement by javascript here we don't create the new Promise object instance with the help of new keyword we used the methods of promises which pre-defined...... 

//* This above Promise.resolve() was equivalent to this below code we are creating upto. 
// function createPromise() {
//     return new Promise(function executer(resolve,reject) {
//         resolve("Promise Resolve");
//         reject("Promise Reject");
//     });
// };

x.then(function resolvePromise(value) {
  console.log("Who's promise !!!!! ", value);
});

setTimeout(function timerTwo() {
  console.log("Timer Two Ended");
}, 0);

console.log("End of the File");
