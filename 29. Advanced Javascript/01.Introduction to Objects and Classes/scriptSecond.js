//* Let's modify our constructor function in class Product 

class Product {
    //* Data Member
    // name;
    // model;
    // company;
    // price;
    // description;
    // reviews;
    // ratings; 
    //? What happens when we don't define the data member 


    //* Member Function 

    //? creating custom constructor function 
    constructor(productName, productModel , prdouctCompany, productPrice, productDescription, productReviews, productRatings ) { 
    //! As we know that "this" keyword refer to newly object we create from Product class. 
        this.name = productName;
        //* So here "this" keyword add the key name : undefined value on that object and similarly with below all this. statement doing the same thing creating key. 
        this.model = productModel;
        this.comapny = prdouctCompany;
        this.price = productPrice; 
        this.description = productDescription; 
        this.reviews = productReviews; 
        this.ratings = productRatings; 
        //? If we don't define the data member than this this mechansim was also work for ourself 
        //! If we don't define the this keyword mechanism data member or simple data member if we create the Object which will remain empty if we pass the argument value to constructor method. 



    }; 

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

} ;


const iphone = new Product("iphone", "16th gen", "Apple", 120000, "Mobile phone of 16th generation of apple Iphone series", {}, 4.5  ); 
//* This Product ();  was refering to calling constructor only so We calling the constructor function of Product class with the help of new keyword which called the constructor function  


//! Let understand what happening behind the scence : 
//* --> When we use the new keyword it create the new plain and empty object. 
//* --> Than new keyword call the constructor function of our class than the "this" keyword inside the constructor function have the access of this new object we create in step 1. 
//* ---> So "this" keyword have the access of our newly empty object which create the keys and undefined value inside that object but when we create Object from class than it we assign the value as an argument to our keys. 


console.log(iphone);