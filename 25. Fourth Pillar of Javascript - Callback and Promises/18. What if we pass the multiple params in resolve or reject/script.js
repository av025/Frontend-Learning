//! What if we pass the multiple params in resolve or reject ?
//* Let pass the the multiple parameter to resolve and reject callback

// generateRandomNum function
function generateRandomNum(max) {
  return Math.floor(Math.random() * max);
}

// createPromiseWithTimeout function
function createPromiseWithTimeout() {
  return new Promise(function (resolve, reject) {
    let num = generateRandomNum(10);
    setTimeout(() => {
      if (num % 2 === 0) {
        //? What happen if we pass the multiple params or argument that affect our result ???? 
        resolve(num, 20 , 30);
        //* That can't affect the result of promise because it take only first argument the num in which we set the value. and this argument 20 , 30 become optional to our resolve executer callback.... 
        
      } else {
        reject(num);
      }
    }, 6000);
  });
}

const x = createPromiseWithTimeout();

x.then((num) =>
  console.log("Promise Resolved the value of num was : ", num)
).catch((num) => console.log("Promise Reject the value of num was : ", num));
