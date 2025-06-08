//! Debugging the complex set of functions

// Product constructor function
function Product(name, price, category) {
    this.productName = name;
    this.productPrice = price;
    this.productCategory = category;

    //* If we want to inherit properties and methods from Category constructor without using prototype chaining,
    //* we can use call() to bind the Category constructor to the current object
    // Category.call(this, category);
    //* 'this' refers to the object being created by Product, and we pass 'category' to the Category constructor
}

// Category constructor function
function Category(category) {
    this.productCategory = category;

    // If we wanted to define the method directly on the instance instead of prototype
    // this.getCategory = function () {
    //     console.log(this.productCategory);
    // }
}

// Create an instance of Product
const productOne = new Product("Play Station 5", 50000, "Electronics");

console.log(productOne);
/**
  Output:
  Product {
    productName: 'Play Station 5',
    productPrice: 50000,
    productCategory: 'Electronics'
  }
*/

//* If we had used call() in the Product constructor (Category.call(this, category)),
//* then getCategory() would also be available directly if defined inside Category constructor.

//! Now, let's achieve inheritance via prototype chaining instead of using call()

// Set up prototype chain: Product.prototype inherits from Category.prototype
Object.setPrototypeOf(Product.prototype, Category.prototype);

// Define getCategory method on Category’s prototype
Category.prototype.getCategory = function () {
    console.log(this.productCategory);
};

// Now productOne can access getCategory() through the prototype chain
productOne.getCategory();  // Output: Electronics



