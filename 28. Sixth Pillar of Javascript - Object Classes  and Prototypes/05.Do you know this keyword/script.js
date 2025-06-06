//! Do you know about the "this" keyword?
//* Let's understand this keyword with the help of an example.

//? Let's create a class called Product.

class Product {
    //* Data Members (properties of the Product)
    productName;
    productModel;
    productPrice;
    productCompany;
    productDescription;
    productRating;
    productReview;

    //* Member Functions (methods to perform actions)
    buyProduct() {
        console.log("Product bought");
    }

    cancelProduct() {
        console.log("Cancel Product");
    }

    addToCart() {
        console.log("Add Product To Cart");
    }

    removeFromCart() {
        console.log("Remove Product from Cart");
    }

    productDescription() {
        console.log("Show product Description");
    }
};

//* Let's see the syntax of creating an object using the class blueprint defined above.
const iphone = new Product();
console.log(iphone);

//? In the above line, we created an instance of the Product class using new Product() and stored it in a variable named 'iphone'.

//* Let’s understand what happens behind the scenes when we create an object using the new keyword:

//* When we use the new keyword, it first creates a new plain and empty object.

//* Then, the new keyword calls the constructor function, which is a special function inside the class.
//* Inside the constructor, the this keyword automatically refers to the new object being created.
//* The constructor adds all the properties and methods to this object.
//* Finally, the new object is returned.

//! Here, the "this" keyword refers to the place (call site) from where the function is called.
//! We often say that "this" refers to the current object, which is partially correct.
//! In reality, "this" depends on how the function is called (call site).
//! This call site can be an object, a position in the code, or in classes, it usually refers to the new object being created.


