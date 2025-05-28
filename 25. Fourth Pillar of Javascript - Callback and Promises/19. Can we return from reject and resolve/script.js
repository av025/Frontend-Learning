//! Can we return from reject and resolve ?

//* Let see we can return anything from reject and resolve callback function :

function getNumbInt(max) {
  return Math.floor(Math.random() * max);
}

function getPromiseFromTimeout() {
  return new Promise(function (resolve, reject) {
    let num = getNumbInt(10);
    setTimeout(function () {
      if (num % 2 === 0) {
        console.log("Promise Fullfiled ");
        resolve(num); //! When we call the resolve callback than only it update the state of promise other wise default state pending will remain same
        //* Can we call resolve() again it update our value or not ???
        // console.log("Resolving again");
        // resolve(11);
        //! It always give the value of first implement only in the case if we call again resolve()  that does not affect the value of resolve state. 
        console.log("Completed Resolving !!!!");

        return num;
      } else {
        console.log("Promise Rejected");
        reject(num); //! When we call the reject callback than only it update the state of promise other wise default state pending will remain same.
        //* Can we call reject() again it update our value or not ????
        // console.log("Rejecting again");
        // reject(11);
         //* Can we call resolve() again it update our value or not ???
        // console.log("Resolving again");
        // resolve(11);
        //! It always give the value of first implement only in the case if we call again reject()  that does not affect the value of resolve state. 
        console.log("Completed Rejecting !!!! ");
        return num;
      }
    }, 8000);
  });
}

const y = getPromiseFromTimeout();

console.log(y);
//! When we print our promise Object than it show that promise was in it's default state means Pending state not updating if the promise was rejected or updated !!!!!

//* As we know that promise also return the value also
y.then((num) => console.log("Promise Resolve the num was : ", num)).catch(
  (num) => console.log("Promise Reject the num was : ", num)
);
