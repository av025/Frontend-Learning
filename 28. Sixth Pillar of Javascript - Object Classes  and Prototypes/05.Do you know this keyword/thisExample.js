//! Example of "this" keyword

//* Let's create an object
const iphoneSecond = {
  name: "iPhone 16 Pro Max",
  price: 120000,
  description: "iOS phone model 16th generation and Pro Max series",
  company: "Apple",
  rating: 4.6
};

const iphone = {
  name: "iPhone 16 Pro Max",
  price: 120000,
  description: "iOS phone model 16th generation and Pro Max series",
  company: "Apple",
  rating: 4.6,

  // display: function () {
  //   console.log("Display the call site", this);
  //   //? As we know, the "this" keyword refers to the call-site (object from which it is called)
  // },

  display: () => {
    console.log("Display the call site", this);
    //! Arrow functions always resolve "this" using lexical scope (one level above its current scope)
  }
};

const samsungS = {
  name: "Samsung S10",
  price: 80000,
  description: "Android phone, S series, 10th generation",
  company: "Samsung",
  rating: 4.6,

  display: function () {
    console.log("Display the call site", this);
    //? As we know, the "this" keyword refers to the call-site
  }
};

// Calling the `display` method on iphone object
iphone.display();

//* When we call `iphone.display()`, and the `display` method is an arrow function,
//* it doesn't have its own `this`. Instead, it uses the `this` from its lexical (outer) scope.
//* In this case, the outer scope is the global scope. So in Node.js, `this` will be an empty object `{}`.
//* In a browser, it would refer to the `window` object.

// Example expected output in Node.js:
// Output: Display the call site {}

// But if we had used a regular function instead of an arrow function,
// the output would have been the iphone object itself.

/**
 * Expected output if regular function used:
 * Display the call site {
 *   name: 'iPhone 16 Pro Max',
 *   price: 120000,
 *   description: 'iOS phone model 16th generation and Pro Max series',
 *   company: 'Apple',
 *   rating: 4.6,
 *   display: [Function: display]
 * }
 */


// Calling display method on samsungS object
samsungS.display();

//* When we call `samsungS.display()` and `display` is a regular function,
//* the "this" keyword refers to the object that is calling the function,
//* so it refers to the `samsungS` object itself.

/**
 * Output:
 * Display the call site {
 *   name: 'Samsung S10',
 *   price: 80000,
 *   description: 'Android phone, S series, 10th generation',
 *   company: 'Samsung',
 *   rating: 4.6,
 *   display: [Function: display]
 * }
 */


//* Another example of "this" in arrow function inside a regular function
const macbook = {
  name: "MacBook",
  price: 180000,
  model: "16th generation",
  company: "Apple",

  display: function () {
    const arrowFunction = () => {
      console.log("Call site is the lexical environment:", this);
    };

    arrowFunction();
  }
};

macbook.display();

//* Output:
// Call site is the lexical environment: {
//   name: 'MacBook',
//   price: 180000,
//   model: '16th generation',
//   company: 'Apple',
//   display: [Function: display]
// }

//? As we know, when we define an arrow function inside a regular function,
//? it takes the `this` value from its outer (lexical) scope —
//? in this case, that’s the `display` function, which is called from the `macbook` object.
//? So `this` correctly refers to the `macbook` object.
