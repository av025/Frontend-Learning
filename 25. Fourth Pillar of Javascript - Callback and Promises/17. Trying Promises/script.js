//! Trying Promises
//* Let's see the coding implementation of Promises

// Math.random() is a built-in JavaScript method that returns a float between 0.0 and less than 1.0
// Multiplying it by 5 gives us a number between 0 and 5 (not including 5)

//? getRandomIntNum function
function getRandomIntNum(max) {
  return Math.floor(Math.random() * max);
}

//? Let's create a promise that does some loop processing and then resolves or rejects
function createPromiseWithLoop() {
  return new Promise(function (resolve, reject) {
    for (let i = 1; i < 10000000; i++) {
      // Simulate processing
    }
    let num = getRandomIntNum(10);
    if (num % 2 == 0) {
      resolve(num);
    } else {
      reject(num);
    }
  });
}

//* Creating the promise is synchronous, but it may resolve or reject based on async logic
//* Let's create another one using setTimeout (which is async)

function createPromiseWithTimeout() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let num = getRandomIntNum(10);
      if (num % 2 === 0) {
        resolve(num);
      } else {
        reject(num);
      }
    }, 10000); // 10 seconds
  });
}

//* This prints: Promise { <pending> }
const y = createPromiseWithTimeout();
console.log(y);

//* After 10 seconds, the promise either resolves or rejects, so we should handle it properly:
//! As we know that promise return the number also if we want to check that than we do chaining with the help of .then() and .catch()
y.then(num => console.log("Resolved with even number:", num)) //* For Resolve state 
 .catch(num => console.error("Rejected with odd number:", num)); //* For Rejected state 
