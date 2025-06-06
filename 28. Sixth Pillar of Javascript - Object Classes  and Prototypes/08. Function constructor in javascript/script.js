//! Function Constructor in JavaScript
//* Classes were introduced in JavaScript much later (ES6). 
//* Before that, we used function constructors — which served a similar purpose as classes.

function Product(name, price, company) {
  //* Creating Data Members
  this.productName = name;
  this.productPrice = price;
  this.productCompany = company;

  //* Creating Member Functions (directly on each instance — not prototype-based)
  this.buyProduct = function () {
    console.log("Product Bought");
  };

  this.cancelProduct = function () {
    console.log("Product Cancelled");
  };

  this.addToCart = function () {
    console.log("Product added to Cart");
  };

  this.removeFromCart = function () {
    console.log("Product removed from Cart");
  };

  //? If we don’t return anything, JavaScript automatically returns `this`
  // return this;

  //? If we explicitly return an object, it overrides the default object returned by the constructor
  // return { name: "Aayush Vyas" };

  //? If we return a primitive value (like number, string, etc.), it is ignored.
  //? JavaScript still returns the `this` object.
  return 10;
}

//* Creating a new object using the constructor function
const iphone = new Product("iPhone 16 Pro Max", 120000, "Apple");

console.log(iphone);
// iphone.buyProduct();
// iphone.cancelProduct();
// iphone.addToCart();
// iphone.removeFromCart();

//! What happens when we call the constructor without the `new` keyword?

// const samsungPhone = Product("Samsung S10", 80000, "Samsung");
// console.log(samsungPhone);

/**
 *  If we don’t use the `new` keyword:
 * - A new empty object is NOT created.
 * - The `this` keyword refers to the global object (in browsers: `window`, in Node.js: `{}`).
 * - The properties are assigned to the global scope, not to a new object.
 * - The function does not return the constructed object, and you may get `undefined`.
 */

//! When we don’t use new keyword then new plain and empty object was not created. So the this keyword is not bound to that object and instead refers to the global object.



