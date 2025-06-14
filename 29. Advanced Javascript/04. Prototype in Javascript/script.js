//! Prototype in Javascript 
//* The Object Oriented Programming in javascript was way different as compare to traditional programming language like c++, java etc. 

//* The Object oriented programming in java or c++ are more purely based on classes and object so when we create the class in it and implement all the data member and member function in it. When we create the instance of object from the class than it create pure copy of that class and we can't change the object properties and method if that object was present in memory if we do changes in our class data member and member functions. 

//* But in javascript there was not mental model of doing the copy of classes instead it was more object chaining so we can associated our data member and member function from one object to another object linking of object and that linkage was provide by the "prototype method" and in javascript the classes was wrapper and the object was created with the help of constructor function. 

//? Prototype Property of Javascript ? 
//* Prototype was mechanism with the help of Object can share their properties from another objects and every object has the access of the prototype property. 

// const demoObject = {
//     x:2
// }; 

//* let use the inbuilt method of object 
// console.log(demoObject.toString());  // Output : [object Object]
//* Now we don't define the .toString() method but it have so it have this method with the help of prototype inheritance. 

// Let create more broader example to understand the prototype 

// class Product {
    // productName; 
    // productModel;
    // productPrice;
    // productCompany; 

    // constructor(name, model, price, company) {
        // this.productName = name; 
        // this.productModel = model; 
        // this.productPrice = price; 
        // this.productCompany = company; 
    // };

    // displayInformation() {
        // console.log(this) //* Refers to Object
    // };
// }; 

// const productOne = new Product("Play Station 5", "Slim Model", 50000, "Sony"); 
// console.log(productOne);

// productOne.displayInformation(); 
//! Now here the question was arise that how this productOne object have this member function displayInformation() if we don't add this into 

//* Now this Product Class have the property of prototype. 
// console.log(Product.prototype); // Output : {} 

//? Let's understand the mechanism of prototype 

//* 1st. In the internal JavaScript environment, we have a special function called `Object` (with capital O). 
//* This function is associated with a special unnamed object that contains default methods like:
//* toString(), isPrototypeOf(), hasOwnProperty(), etc.
//* This unnamed object is referred to as `Object.prototype`.
//* The `Object` function has a property called `prototype` which points to this unnamed object.
//* This prototype object, in turn, points back to the `Object` function via its constructor property.


//* 2nd. When we create our own class (e.g., `class Product {}`), JavaScript internally creates a prototype object.
//* This object is accessible via `Product.prototype`.
//* All class methods are stored inside this prototype object.
//* This prototype object also contains a `constructor` property pointing back to the `Product` class itself.
//* This prototype object is linked to the global `Object.prototype`, forming a hidden prototype chain.


//* 3rd. When we use the `new` keyword to call a constructor (e.g., `new Product()`),
//* a new instance object is created.
//* This new object’s internal `[[Prototype]]` (i.e., __proto__) points to `Product.prototype`.
//* The `Product.prototype` object itself has a constructor pointing back to the `Product` class.
//* `Product.prototype` is also internally linked to `Object.prototype`, forming a full prototype chain.

//? Let see how the prototpal chaining works : 

//* Let associate some property to our iphone object 
// iphone.buyProduct = function() {
//     console.log("Product Bought");
// }; 

//* Now this buyProduct was associated only to this iphone object not with Product class 

//* Let do prototypal chaining 
// productOne.__proto__.buyProduct = function() {
    // console.log("Product Bought");
// }; 
//! This __proto__ was called the dunder proto with the help of it we can do linkage of our methods and properties to another Object because it set our methods in class constructor associated prototype object also. 

// console.log(productOne.__proto__);  
//* So with this productOne this buyProduct method was associated if we don't find than we look in this Product.prototype object 
//? If this propertery was not find in the productOne Object than we see in the Class Object prototype than we don;t see in this Object unamed object so that's how the linking of prototypal inheritance work. 

// productOne.displayInformation(); 


//? Let's create the Function Constructor Product 
// function Product(name, price, company) {
    // this.productName = name; 
    // this.productPrice = price; 
    // this.productComapny = company; 
// }; 


// const productOne = new Product("iphone 16 promax", 120000, "apple"); 
// console.log(productOne);

//? Now in this Product function constructor we have to manually attach the methods which in class syntax it do by itself 
// Product.prototype.display = function() {
    // console.log(this);
// }; 

// console.log(Product.prototype); 
//* Output : { display: [Function (anonymous)] }

// productOne.display(); 


//? With the help of prototype property we perform very important property of OOPs concept which was Inheritance and it means inherit the properties and methods from the one object to another object and create the prototypal inheritance. 

//* We inherit Classes also but we know that in javascript classes are wrapper and object was create with the help of constructor function. 

//? Parent Class 
class Events {
    bookEvents() {
        console.log("Event was Booked !!!!");
    }
}; 

//? Child Class 
//* Now when we used the extends keyword than it start inherit that class 
class Movie extends Events {
   showTime() {
        console.log("Movie Show Time");
    };
}; 


//* So here the prototypal inheritance work like this the Movie class prototype object was linked with Events prototype object and the Events prototype object was linked with Object function associated unnamed object. 

class Comdey extends Events {
    showTime() {
        console.log("Comdey Show Time");
    };
};


class Concert extends Events {
    showTime() {
        console.log("Concert Show Time");
    };
};


//* Lets create object 

const movie = new Movie(); 
 movie.showTime(); 
//* Can we access the book Events method because we are inherit the Event class 
movie.bookEvents();  
//? How we can access this bookEvents so it was access through the protoypal inheritance let see that also : 
console.log(Movie.prototype.__proto__);
