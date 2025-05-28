//! Example Case
//* Let see the example case of promises :

//* gererateRandomNum function
function generateRandomNum(max) {
  return Math.floor(Math.random() * max);
}

//* Creating Promise :
function getPromiseFromTimeout() {
  return new Promise(function (resolve, reject) {

    let num = generateRandomNum(10);
    setTimeout(function () {
      if (num % 2 === 0) {
        resolve(num);
      } else {
        reject(num);
      }
  },6000);
  });
}

const response = getPromiseFromTimeout();

console.log(response); 


//* Consume the promise 
response.then(function fullFilmentHandler(value) {
  console.log("Promise was Resolve the value was : ", value);
}, function rejectionHandler(value) {
    console.log("Promise was reject the value was : ",value);
})
