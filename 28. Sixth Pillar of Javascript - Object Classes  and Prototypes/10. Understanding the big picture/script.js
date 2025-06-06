//! Understanding the big picture

//* Let's create a class example

class Product {
    // Data Members with Access Modifiers
    #productName; 
    #productModel; 
    #productCompany;
    #productPrice;  

    // Getter and Setter Functions

    // Setter functions
    set setName(name) {
        this.#productName = name; 
    }

    set setModel(model) {
        this.#productModel = model; 
    }

    set setCompany(company) {
        this.#productCompany = company; 
    }

    set setPrice(price) {
        this.#productPrice = price; 
    }

    // Getter functions
    get getName() {
        return this.#productName; 
    }

    get getModel() {
        return this.#productModel;
    }

    get getCompany() {
        return this.#productCompany; 
    }

    get getPrice() {
        return this.#productPrice; 
    }

    // Member Function

    //* Constructor function
    constructor(name, model, company, price) {  
        this.#productName = name; 
        this.#productModel = model; 
        this.#productCompany = company; 
        this.#productPrice = price; 
    }

    displayProduct() {
        console.log("Display the Product", this); 
    }
}

//! Object-Oriented Programming in JavaScript is quite different from other programming languages.
//! In languages like Java and C++, we have more access modifiers including "protected",
//! but in JavaScript, we only have public and private (via #), no "protected".

//! Conclusion: JavaScript's OOP is not purely object-oriented like Java or C++.
//! Here, classes are mostly used as syntactic sugar to create a structure for objects.
//! The real object creation mechanism still depends on constructor functions under the hood.
