//! Consuming Promises
//* Upto we know that how we create the promise object now understand how we consume it

//? Understand with example how we consume promise object

//* Create some dummy data like something to book API
const bookData = [
  { id: 1, bookName: "Book One", bookAuthor: "Author of Book" },
  { id: 2, bookName: "Book Two", bookAuthor: "Author of Book" },
  { id: 3, bookName: "Book Three", bookAuthor: "Author of Book" },
  { id: 4, bookName: "Book Four", bookAuthor: "Author of Book" },
  { id: 5, bookName: "Book Fifth", bookAuthor: "Author of Book" },
  { id: 6, bookName: "Book Sixth", bookAuthor: "Author of Book" },
];

//* Create Promise Object
function getAllBookData() {
  return new Promise(function (resolve, reject) {
    console.log(
      "Entering the executor callback function in the promise constructor"
    );
    setTimeout(function () {
      if (bookData.length > 0) {
        resolve({ success: true, data: bookData });
        console.log("Promise Fullfiled !!!");
      } else {
        reject({ success: false, message: "Data not found" });
        console.log("Promise Rejected !!!");
      }
    }, 3000);
    console.log(
      "Existing the executor callback function in the promise constructor"
    );
  });
}

const response = getAllBookData();
console.log(response);

//* Above we see that how we can create the promise object after that let see how we can consume the promise object that we create

//? There was an handler to consume the promise object we attach those functionality after our promise object state was update to resolve or reject than we attach this handler functionality !!!!

//? The first handler we attach was .then(fullfilmentHandler, rejectionHandler);
//* Here this fullFilmentHandler and rejectionHandler was also callback function
// Let see the example of  .then handler
response.then(
  function fullFilmentHandler(value) {
    console.log("Inside the fullfilment Handler with value", value);
  },
  function rejectionHandler(value) {
    console.log("Inside the rejection Handler with value", value);
  }
);

//! Here fullFilment handler for extracting the value of resolve state of promise and second rejectionHandler for extracting the value of reject state of promise. 

