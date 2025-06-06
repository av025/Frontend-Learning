//! Private Properties inside Classes

//* Interesting property which is associated with object-oriented programming is abstraction.

//? What is abstraction?
//* Abstraction means hiding the internal implementation details of a class or object
//* and showing only the necessary or relevant information to the user.
//* It helps in reducing complexity and increases reusability.

//* Real-life example:
//* When you deposit cash at a bank counter, you just give the money to the teller.
//* You don’t know how it is actually processed internally — this is abstraction.

//* Another example is a restaurant:
//* You give your food order to a waiter and receive the food.
//* You don’t know what happens in the kitchen — again, abstraction.

//* Abstraction ka matlab hota hai ki hum main code ka internal logic chhupa dete hain,
//* aur sirf important details ya features hi user ko dikhate hain — taaki use karna easy ho jaaye.

class Product {
  // Data Member (Private using Access Modifier "#")
  //! With the help of Access Modifier we can do private our classes properties and we use # "hashtag" symbol. 
  #productName;
  #productPrice;
  #productCompany;

  constructor(name, price, company) {
    this.#productName = name;
    this.#productPrice = price;
    this.#productCompany = company;
  }

  // Setter Methods
  setCompany(value) {
    if (typeof value !== "string") {
      console.log("Invalid Value");
    }
    this.#productCompany = value;
  }

  setName(value) {
    if (typeof value !== "string") {
      console.log("Invalid Value");
    }
    this.#productName = value;
  }

  setPrice(value) {
    if (typeof value !== "number") {
      console.log("Invalid value");
    }
    this.#productPrice = value;
  }

  // Getter Methods
  getName() {
    return this.#productName;
  }

  getPrice() {
    return this.#productPrice;
  }

  getCompany() {
    return this.#productCompany;
  }

  displayProduct() {
    console.log("Display Product", this);
    console.log(
      "Access the private properties ",
      "company : ",
      this.#productCompany,
      " name : ",
      this.#productName,
      " price: ",
      this.#productPrice
    );
  }

  buyProduct() {
    console.log("Buy Product");
  }

  cancelProduct() {
    console.log("Cancel");
  }

  addToCart() {
    console.log("Product add to cart");
  }

  removeFromCart() {
    console.log("Product remove from cart");
  }
}

const iphone = new Product("iphone 16 promax", 120000, "apple");

console.log(iphone);

// Attempt to change public property (won't affect private values)
iphone.productPrice = 20; // creates a new public property

console.log(iphone);

iphone.displayProduct(); // still shows the original private value

// Attempt to directly access private field (will throw error)
// iphone.#productName = "AAA";
// console.log(iphone.#productName);

// Use setter to change values
iphone.setCompany("samsung");
iphone.setName("Samsung S 10");
iphone.setPrice(80000);

iphone.displayProduct();

console.log(iphone.getName());
console.log(iphone.getCompany());
console.log(iphone.getPrice());

