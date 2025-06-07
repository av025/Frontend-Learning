//! Visualizing the Prototype in Code

//* Let's visualize the prototype in code

class Product {
  // Data Members
  productName;
  productCompany;
  productPrice;
  productModel;

  // Member Function
  constructor(name, company, price, model) {
    this.productName = name;
    this.productCompany = company;
    this.productPrice = price;
    this.productModel = model;
  }
}

const iphone = new Product(
  "iphone 16 promax",
  "apple",
  120000,
  "16th generation"
);

console.log(iphone);

//* Let's check the constructor property in our iphone object. But note that there is no constructor method directly inside the iphone object.

console.log(iphone.constructor); //* Output: [class Product]

//* So here, even though we don't have a constructor method directly inside the iphone object, JavaScript uses prototypal chaining:
//* If the constructor method is not found in the `iphone` object, it looks up the chain in the `Product.prototype`.
//* If still not found there, it looks further into the internal unnamed object associated with the global Object function — which is hidden and linked via the prototype chain.

//* That’s why when we use the `new` keyword, it creates a plain and empty object. Then, this object is associated with other objects in the prototype chain, linking everything together.
