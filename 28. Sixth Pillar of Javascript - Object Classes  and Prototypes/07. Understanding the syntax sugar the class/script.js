//* In JavaScript, classes are just syntactic sugar over constructor functions.
//* That means: even though we use the `class` keyword, under the hood objects are still created using constructor functions.

class Product {
  //* Data Members
  //? These are optional to define outside the constructor in JavaScript.
  // productName;
  // productPrice;
  // productDescription;
  // productModel;
  // productCompany;

  //* Constructor Function (special method that runs automatically when we use `new`)
  constructor(name, price, description, model, company) {
    //* Every function in JavaScript has access to the `this` keyword,
    //* which refers to the newly created object when using `new`.

    this.productName = name;
    this.productPrice = price;
    this.productDescription = description;
    this.productModel = model;
    this.productCompany = company;

    //* The below assignments are incorrect — you're not assigning methods, just referencing them as properties.
    //* You don't need to do this at all. Methods defined in the class body are already available on the prototype but we are doing for experiement 
    // this.buyProduct;
    // this.cancelProduct;
    // this.addToCart;
    // this.removeToCart;
    // this.showDescription;
  }

  //* Member Methods (available on every object created using the class)
  buyProduct() {
    console.log("Buy Product");
  }

  cancelProduct() {
    console.log("Cancel Product");
  }

  addToCart() {
    console.log("Add Product to Cart");
  }

  removeToCart() {
    console.log("Remove Product from Cart");
  }

  showDescription() {
    console.log("Show product description");
  }
}

//* Creating an object using the class
const iphone = new Product(
  "iPhone 16 Pro Max",
  120000,
  "iOS phone - 16th generation Pro Max series",
  "16th Gen",
  "Apple"
);

//* Calling methods on the object
iphone.addToCart();
iphone.removeToCart();
iphone.buyProduct();
iphone.cancelProduct();
iphone.showDescription();

//? So this shows that JavaScript classes are just syntactic sugar.
//? Under the hood, objects created using `class` are still created using constructor functions.
