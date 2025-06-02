//! Introduction to Objects and Classes in Javscript 
//* In software engineering, anything that we have can be mapped a blueprint or a vision. For example, in a example, in Amazon, every product has a similar structure, we can generalize this and make sure we don't repeat again and again. 


//? Classes 
//  Classes are the blueprint of real life entities means it means thought process.
//  Classes are going to represent how entity should look and behave. When i say how they look, We refer to which properties they posses and similarly if we say behave it means what actions they performed on it. 

//* Let take an example : 
// Consider an Product class, inside the product class what do you think should be the properties of a product  class have ?  Properties are just the feature which Product class have : 
//* product name : Name of the product 
//* product model : Model of the product
//* product description : Description of product  
//* product Price : Price of the product 
//* product reviews : Reviews of the product 
//* product ratings : Rating of the product 
//* and more...... 
//? This above set of properties was posses by the Product Class and in techincal term this above "properties" are called the "Data Member" and If the two products are different to each other it means one of the properties are not similar to each other that's why it was different.  

// Similarly let see the what action we can perform on this product class 
//* We can buy a product 
//* We add product to the cart 
//* We can display the detail of product 
//* We can give review to product 
//* We can add product in a wishlist 
//* We can give rating to the product 
//* and more...... 
//? This above actions are associated with product, which was also consider as the "behaviour"  of product class. In Techincal term this behaviour of product class was called as "Member Function" 


//? How we create Class in Javascript ? 
//* In javascript we create the class with the help of "new" keyword and we can give properties which called "Data Member" in technical term and behaviour which called "Member function" in technical term create inside that class. 

//* Every class associated with thier identifier or name which we give at the time of declaring the classes  

//? Syntax of Classes in JS 
//! class <Name of the Class> {
//!            Inside it we give Data Member and  Member Function 
//! } 


//? Example of Product class 
class Product {
    //* Data Member : This Define the Properties of our Product Class 
    productName; 
    productModel; 
    productPrice; 
    productDescription;
    productReviews;
    productRatings
    //* That's how we define the product properties without any variable keyword if we give the variable keyword it start giving syntax error 
    // let someProduct;

    //* Member Function : This Define the behaviour or action on the Products
    //! We create the Member Function like this only and we can't use function keyword to create member function 

    //! constructor: This constructor function will call by javascript itself and it was default present to all classes of javascript which called "default constructor" and in it not any implementation but first Member function which was default called by javascript. 
    
    //* We can create our own custom constructor function 
    constructor() {
        //* Inside we write our implementation we have to create 
    }; 
    //* We can use this custom constructor function outside this class blueprint also....... 

    //? It give error to us  if we use function keyword !!!!!!! 
    // function somethingToDo() {
    //     console.log("Something to Do !!!"); 
    // };

    //* We use arrow function also 
    // somethingToDo = () => {
    //     console.log("Something to do !!!!");
    // }

    addToCart() {
        console.log("Adding Product to Cart");
    }; 

    removeFromCart() {
        console.log("Remove from Cart"); 
    };

    displayProductDetail() {
        console.log("Display Product Detail");
    };

    buyProduct() {
        console.log("Product Bought");
    };

    ratingProduct() {
        console.log("Rating Product");
    };
} 



// function constructor() {
//     console.log("Hello This is constructor function");
// }; 

// constructor();

//? What is constructor in JS Classes ? 
//* Constructor was very special function member, every class in javascript have this constructor functiom member  default 

//* What was the special about it this constructor function ? 
//? When we create object with the help of our classes the first Function member which was created by default javascript and this javascript default run this first constructor method only and also this constructor method was present to all  classes of javascript by default. 

//? The default constructor was called as "default constructor" and we can change this default constructor also by creating our own constructor. 

//! In the Javascript this class we create above was fake it works as a wrapper only inside we implement function to create objects only.  

// let's check the type of product class 
console.log(typeof Product); //! Output was function 

//? Objects 
// Using the Classes we implement or create the final entity which was object  the structure of the object means blueprint was define in the class. 

//? How can we create object from the class ? 
//* We create object from the class with the help of new keyword. 

//* Please don't map the usecase of `new` keyword of javascript with any other programming language which also have the new keyword because javascript new keyword was different from other programming language 

//* Look with example to create object with the help of class blueprint  we define.... 
const iphone = new Product();
//* We create our Object with the help of new Keyword and Than call the Product function which create object with our class. 

console.log(iphone);

//? How new keyword works when we create Object from class ? 
//* Every time we call the new, it does the following 4 procedure: 
//* 1st. It creates the new plain and empty object everytime 
//* 2nd. It calls the constructor of the class and passes the newly created object (not as a parameter)inside a keyword called "this". So constructor automatically has access to the "this" keyword and when we call new, then the "this" keyword has the access to the plain object we create in step 1 and the constructor now can use the "this" keyword inside it and then whatever the logic of constructor it is executed.    
//! In javascript every function have the access to "this" keyword.  

//? From Tommorrow start after 1:19:00 
//* 3rd. 



