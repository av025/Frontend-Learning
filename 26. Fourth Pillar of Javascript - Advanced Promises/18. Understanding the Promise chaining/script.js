//! Understanding the promise chaining
//* Understand the promise chaining with the help of example

Promise.resolve("foo")
  .then(function fullFilmentHandlerOne(value) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        value += "bar";  //* Here we resolve the foobar 
        resolve(value); //* New Promise resolve and it;s value was foobar 
      }, 2000);
    });
  })
  .then(function fullFilmentHandlerTwo(value) {
    setTimeout(function () {
      value += "baz";  
      console.log(value);  //* foobarbaz 
    }, 1000);

    return value; //* Returning the previous value foobar as resolve promise value 
  }).then(function fullFilmentHandlerThird(value){
    console.log(value);  //* foobar 
  });


//! Output : 
// foobar 
// foobabaz 