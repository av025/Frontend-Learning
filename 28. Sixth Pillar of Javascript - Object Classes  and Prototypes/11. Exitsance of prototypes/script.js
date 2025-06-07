//! Existence of Prototypes 
//* Let's understand the concept of prototypes in JavaScript 


//* We know that classes are the blueprint of our objects which define the structure of our data members and member functions. We create objects by calling the constructor with the `new` keyword, and those objects are the real instances.  

//? In traditional programming languages like C++ and Java, we create copies from the class using object-oriented programming. For example, if we create a class with data members and member functions, and then create an instance (object) from it — later if we make changes to the class while the object already exists in memory, those changes are not reflected in the object.
//? So, there is no linkage or chaining between the class and the object. Once the object is created, it becomes a separate individual entity. Any further changes in the class do not affect that object.

//* In JavaScript, objects do not follow the mental model of copying like in traditional languages such as Java and C++. Instead, objects are somehow linked with the constructor functions.  


//? What is a Prototype and why is it important in JavaScript? 
//* Prototypes are a mechanism in JavaScript that allows one object to inherit the properties and methods of another object.

const object = {}; 
//? Every object has a default property called prototype. With the help of this property, one object can inherit features from another.
//* Basically, this prototype is also just an object, and it contains several built-in properties which we don't define ourselves.

//* If we want to see the prototype, we can use the browser console. There we can clearly see the prototype property:

//* Output: 
// {} 
// [[Prototype]]: Object 
//? Prototype object’s inbuilt properties  
// constructor: ƒ Object()
// hasOwnProperty: ƒ hasOwnProperty()
// isPrototypeOf: ƒ isPrototypeOf()
// propertyIsEnumerable: ƒ propertyIsEnumerable()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// __defineGetter__: ƒ __defineGetter__()
// __defineSetter__: ƒ __defineSetter__()
// __lookupGetter__: ƒ __lookupGetter__()
// __lookupSetter__: ƒ __lookupSetter__()
// __proto__: (...)  
// //? This `__proto__` is the prototype property. The double-underscore proto `__proto__` is also an object and it links to the prototype object.
//? Properties of the __proto__ object  
// __proto__: Object
// constructor: ƒ Object()
// hasOwnProperty: ƒ hasOwnProperty()
// isPrototypeOf: ƒ isPrototypeOf()
// propertyIsEnumerable: ƒ propertyIsEnumerable()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// __defineGetter__: ƒ __defineGetter__()
// __defineSetter__: ƒ __defineSetter__()
// __lookupGetter__: ƒ __lookupGetter__()
// __lookupSetter__: ƒ __lookupSetter__()
// __proto__: null  
//? This __proto__ also has its own __proto__ property whose value is null.
//! __proto__ is also called "dunder prototype"
// get __proto__: ƒ __proto__()
// set __proto__: ƒ __proto__()


//? We can see the chaining of prototypes
//* myObject has a prototype property which is an object → that prototype object has its own __proto__ property → that __proto__ also points to an object → and finally ends at __proto__ which is null.


//* Let's see an example of a prototype property

function Product(value) {
    this.name = value; 
}; 

const iphone = new Product("iphone 16 promax"); 

//* Let’s add the display property by accessing the prototype. We know that every object in JavaScript has a prototype property, which is also an object.

//* If we want to add new methods to a constructor function after the object is created, we can do it by using the prototype property.

Product.prototype.display = function() {
    console.log("Display the name of the product ", this.name); 
}; 

//? We are adding a new behaviour (i.e., a member function) to our class using the constructor function’s prototype. This is how we link a new feature to a class using the prototype property.
//* To access the display() function we just added to the Product class:
iphone.display();   // Output: Display the name of the product  iphone 16 promax 


//! Conclusion:
//* In general-purpose programming languages like Java and C++, classes and objects follow a copy-based model. When we create an object and later make changes to the class (like adding or modifying methods), those changes are not reflected in the already existing object. This is because there's no link between the object and the class after creation.
//* But in JavaScript, objects and constructor functions are linked via the prototype chain. JavaScript does not use the mental model of copying like traditional languages.
//* Every object in JavaScript has a prototype property which is itself an object, and this allows inheritance and chaining of behaviours.


