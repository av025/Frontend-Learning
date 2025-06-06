//! Understanding the `new` keyword in JavaScript
//* Let's understand the mechanism of the "new" keyword in JavaScript.

class Product {
  //* Data Members (properties)
  productName;
  productModel;
  productPrice;
  productCompany;
  productDescription;

  //? Constructor Function
  constructor(name, model, price, company, description) {
    this.productName = name;
    this.productModel = model;
    this.productPrice = price;
    this.productCompany = company;
    this.productDescription = description;

    //* If we don't return anything from the constructor, JavaScript automatically returns the newly created object with all the properties added through `this`.

    // return this; 
    //? Even if we explicitly write `return this`, it's the same as returning nothing — JavaScript still returns the constructed object.

    //? What happens if we return a custom object?
    // return { name: "Aayush Vyas" };
    //* In this case, the constructor returns the object we explicitly returned, and NOT the one created by the `new` keyword.
    //* JavaScript gives priority to object return types like objects, arrays, functions, etc.

    //? What happens if we return a primitive value?
    // return 10;
    //* If we return a primitive (like number, string, boolean), JavaScript ignores it and still returns the object created via `new`.
  }

  //* Member Functions (methods)
  displayProduct() {
    console.log("Display the product description");
  }

  buyProduct() {
    console.log("Product bought");
  }

  addToCart() {
    console.log("Add product into the cart");
  }

  removeFromCart() {
    console.log("Remove product from cart");
  }
}

//* Main mechanism of the `new` keyword:
// const iphone = new Product();

//? 1. When we use the `new` keyword, JavaScript first creates a new plain and empty object.
//? 2. Then it calls the constructor function of the class (here: `Product()`).
//? 3. Inside the constructor, the `this` keyword refers to the newly created object.
//? 4. Using `this`, we assign all the properties and methods to the object.
//? 5. If no object is returned explicitly, JavaScript returns the object created by `new`.

// Creating object using constructor:
const samsungPhone = new Product(
  "Samsung S10",
  "16th generation",
  80000,
  "Samsung",
  "Samsung phone S series and 10th generation"
);

console.log(samsungPhone);

//? What is Constructor Overloading?
//* Constructor overloading means creating multiple constructors with different sets of parameters or logic.

//? Is constructor overloading possible in JavaScript?
//* No. JavaScript does NOT support constructor overloading directly.
//* You cannot define more than one constructor inside a class — doing so will result in a syntax error.
//* However, you can simulate overloading by using default values or conditionals inside a single constructor.
