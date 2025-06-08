//! Inheritance with Classes
//* Let's understand inheritance with classes

// Create Class A
class A {}

// Create Class B which is inheriting from Class A
//! If we want one class to inherit from another class, we use the "extends" keyword and provide the class identifier from which we want to inherit.
class B extends A {}

// Create an object
const b = new B();

console.log(b);
//* When we log this object in the browser, we observe that the prototype object also refers to class A,
//* and the constructor still refers to class B.
//* The __proto__ (Dunder proto) also points to class A,
//* which means prototype inheritance allows access to class A’s function members and data members.

// Another example:

class Category {
  constructor(category) {
    this.productCategory = category;
  }
}

class Product extends Category {
  constructor(name, category) {
    // Calling the parent class (Category) constructor using super
    super(category);
    //? Here, the super keyword is used to call the constructor of the superclass (Category) from the subclass (Product).
    this.productName = name;
  }
}

// Create an object of the Product class
const iphone = new Product("iphone", "electronics");

console.log(iphone);
// Output: Product { productCategory: 'electronics', productName: 'iphone' }
// This shows that the property 'productCategory' defined in the parent class (Category)
// is successfully initialized in the child class (Product) through inheritance.

// Proving the prototype chain step-by-step
console.log(iphone.__proto__ === Product.prototype);
// true → The prototype of the 'iphone' object is Product.prototype

console.log(iphone.__proto__.__proto__ === Category.prototype);
// true → The prototype of Product.prototype is Category.prototype
// This link is automatically created due to the use of the 'extends' keyword

console.log(iphone.__proto__.__proto__.__proto__ === Object.prototype);
// true → The prototype of Category.prototype is Object.prototype

// This is how JavaScript's prototypal inheritance works:
// iphone → Product.prototype → Category.prototype → Object.prototype → null

// Example using constructor functions:

//* FirstClass function
function FirstClass() {}

//* SecondClass function
function SecondClass() {}

//* Creating objects from both constructor functions
// const first = new FirstClass(); 
//* The prototype of the 'first' object is FirstClass.prototype
// const second = new SecondClass(); 
//* The prototype of the 'second' object is SecondClass.prototype

//? Both objects have their own prototypes. To establish inheritance between them:

// In JavaScript, we have a method on Object called setPrototypeOf() that helps in setting up inheritance between function objects

// Now making SecondClass inherit from FirstClass
Object.setPrototypeOf(SecondClass.prototype, FirstClass.prototype);
//* Setting up prototype inheritance using Object.setPrototypeOf()
//? This means SecondClass.prototype now points to FirstClass.prototype, so SecondClass inherits from FirstClass

//* Adding a method to FirstClass
FirstClass.prototype.display = function() {
  console.log("Display something !!!!");
};

const secondClass = new SecondClass(); 
secondClass.display(); 
//* Output: Display something !!!!
//* This works because SecondClass.prototype is linked to FirstClass.prototype through prototypal inheritance


