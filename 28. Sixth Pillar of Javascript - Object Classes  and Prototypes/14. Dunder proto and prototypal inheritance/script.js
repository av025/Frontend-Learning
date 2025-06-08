//! Dunder proto and Prototypal Inheritance

// Let's understand Dunder proto (__proto__) and prototypal inheritance in JavaScript

class Product {
  // Data Members
  productName;
  productPrice;
  productCompany;
  productModel;

  // Constructor Function
  constructor(name, price, company, model) {
    this.productName = name;
    this.productModel = model;
    this.productCompany = company;
    this.productPrice = price;
  }

  // Member Functions
  displayProduct() {
    console.log("Display the Product");
  }

  buyProduct() {
    console.log("Buy Product");
  }

  cancelProduct() {
    console.log("Cancel Product");
  }

  addToCart() {
    console.log("Add to Cart");
  }

  removeFromCart() {
    console.log("Remove from Cart");
  }
}

// Create an Object
const iphone = new Product("iPhone 16 Pro Max", 120000, "Apple", "16th Generation");

// Access the prototype object of 'iphone'
console.log(iphone.__proto__); // This __proto__ is also called the Dunder proto
// Output: Shows all the methods defined in the Product class
// These are actually present in the prototype object of the Product constructor function

// Access the prototype of Product.prototype (which is Object.prototype)
console.log(iphone.__proto__.__proto__);
// Output: Contains built-in methods like hasOwnProperty, toString, etc.
// This is the prototype of Product.prototype, i.e., Object.prototype

// This is how prototypal chaining works:
// First, JavaScript checks the property on the object itself
// If not found, it looks at the prototype object (Product.prototype)
// If still not found, it checks Object.prototype (base object)
// This continues until it either finds the property or reaches null

// Adding a method to the prototype object after object creation
iphone.__proto__.wishlist = function () {
  console.log("Add Product to Wishlist");
};

// Since the method is added to the prototype,
// All instances of Product will now be able to access wishlist()

const samsung = new Product("Samsung S10", 80000, "Samsung", "10th Generation");

samsung.wishlist(); // Works because wishlist is in the shared prototype chain

