//! Underlying Structure of Prototypes in Javascript Objects
//* Let’s understand the underlying structure of prototype in some steps.

//? 1st Step

//? We divide our explanation into two parts: First is JavaScript Internal Environment and second is Code Implementation by ourselves, so we create an abstraction layer to understand how things work internally and how it reflects when we implement it in our JS code.

//* Part One: JavaScript Internal Environment
// 1st. Internally, JavaScript has a Function called Object with the help of which we create instances of objects in JavaScript.
// Example of Object Class
console.log(Object); //* Output : [Function: Object]
// Check typeof Object
console.log(typeof Object); //* Output : function

//* Let’s create a new Object with this class and check what built-in properties and methods it has.
const myObject = new Object();
console.log(myObject);  //* Output in Node.js environment: global Object { }

// 2nd. With this Function Object, there is another entity associated with it which is unnamed and is also an object.

// 3rd. This Function Object always points toward that unnamed object entity, and that property is called prototype. This object has all the properties like toString(), isPrototypeOf(), etc. Whatever properties we see in prototype objects reside inside this unnamed object only, which makes this object very important and crucial for our object creation.

// 4th. This unnamed object also points toward the Function Object using a property called constructor. We can name anything to this constructor property because it works as a constructor, and in JS Docs also it is referred to as constructor only.

//* Part Two: JS code implemented by ourselves

// 1st. When we create any object using a Constructor Function or with a Class, then here also one entity is created, which is an unnamed object.

// 2nd. When we create an object with constructor using the "new" keyword, then here also an entity is created which is again an unnamed object. This Function points toward that unnamed object using the property called "prototype", and all the properties like toString(), hasOwnProperty(), and isPrototypeOf() are present in this unnamed object.

// 3rd. This unnamed object also points back toward the Function Object using a property we call "constructor".

// 4th. If we want to access that object, then we use ClassName.prototype — let’s say the class name is Product, then `Product.prototype` is the prototype object and it is linked back to the Constructor Function or Class using the constructor property.

//! Here we have to understand that the unnamed entity object in internal JS environment and the prototype object created when we implement object creation — both are interlinked.

//* Let’s see the example:

function Product(name, price, company) {
    this.productName = name;
    this.productPrice = price;
    this.productCompany = company;
};

//* Create Object
const iphone = new Product("iphone 16 promax", 120000, "apple");
console.log(iphone);

//* Let's create a new function member in our Product class
Product.prototype.display = function() {
    console.log("Display Product Info :", this);
};
//? As we know, the internal JS unnamed object entity is linked with Function Object. When we create an object using constructor in implementation, the unnamed object entity is linked — we call it prototype object. In this prototype object, we added the property `display`, and both the internal and implementation-level unnamed objects are internally linked.

//? 2nd Step

//! Let's recall what the new constructor does!!!
//* 1st. The `new` constructor creates a plain and empty object.
//* 2nd. Now the `new` keyword calls the constructor function, and we pass this new object to the "this" keyword. Every function in JavaScript has access to "this" — and here "this" refers to the object created in step 1. Using "this", we can execute all the implementations on the newly created object.

//* As we understand, when we hit `new`, it creates a brand new empty object.

//? Here again, we do linking — this brand new object is linked to prototype.object. So basically, we create the `display()` property of the Product class and attach it to the prototype object, and the object created by `new` is linked to that prototype object.

//! Let's understand again the chronological order of prototype linking:

//* When we create a new object using constructor method
//  ----------------> That links with our Class or Constructor function
//  ----------------> which links to prototype.object
//  ----------------> this prototype.object is internally linked with JavaScript’s internal object
//  ----------------> where Object function is linked with internal unnamed object entity.

//* Case :

function Car(name, model, launchYear) {
    this.carName = name;
    this.carModel = model;
    this.launchYear = launchYear;
};

const mustang = new Car("mustang gt", "GT Fastback", 2017);

//? After creating the mustang object, attach the `displayInfo` method to the Car class
Car.prototype.displayInfo = function() {
    console.log("Display the info of car: ", this);
};
//! When we define `.displayInfo()` after the object is created in memory, it starts linking our new object from `prototype.object`, then checks if that property exists. If not found, it looks into the internal unnamed object associated with Object function. If not there, then it finally adds to that object.

//* That’s how prototype chaining works — at runtime, if a property is not found, JavaScript looks for it in the prototype chain.

console.log(mustang);










