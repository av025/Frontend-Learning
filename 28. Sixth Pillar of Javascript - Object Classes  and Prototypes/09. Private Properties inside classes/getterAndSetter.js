//! Example of getter and setter function
//* Let see getter and setter function cleanly here !!!!

//? Create class example
class Product {
  // Data Member : We create data member and do private with access modifier
  #productName;
  #productCompany;
  #productPrice;
  #productModel;

  // constructor
  constructor(name, company, price, model) {
    this.#productName = name;
    this.#productCompany = company;
    this.#productModel = model;
    this.#productPrice = price;
  }

  //* Create getter and setter

  //? setter fn

//   setName(name) {
//     if (typeof name !== "string") {
//       return "Invalid value";
//     }

//     this.#productName = name;
//   }

//   setCompany(company) {
//     if (typeof company !== "string") {
//       return "Invalid value";
//     }

//     this.#productCompany = company;
//   }

//   setModel(model) {
//     if (typeof model !== "string") {
//       return "Invalid value";
//     }

//     this.#productModel = model;
//   }

//   setPrice(price) {
//     if (typeof price !== "number") {
//       return "Invalid Value";
//     }

//     this.#productPrice = price;
//   }

//?  getter fn
//   getName() {
//     return this.#productName;
//   }

//   getCompany() {
//     return this.#productCompany;
//   }

//   getModel() {
//     return this.#productModel;
//   }

//   getPrice() {
//     return this.#productPrice;
//   }


//! In javascript we have more better and clean sybtax way to write getter and setter and that was set keyword and get keyword. 

//* setter function 
set settingName(name) {
    this.#productName = name; 
    //? setter function did not return anything 
}; 

set settingCompany(company) {
     this.#productCompany = company; 
    //? setter function did not return anything
};

//* getter function 
get gettingName() {
    return this.#productName; 
}; 

get gettingCompany() {
    return this.#productCompany; 
}

  // Member Function

  displayProduct() {
    console.log("Dislay product ");
  }
}

//  Create Instance of Product from class 
const iphone = new Product("iphone 16 promax", "apple", 120000, "16th gen");

//* Access Private Properties 

//* Setting value 
// iphone.setName("samsung s 10"); 
// iphone.setCompany("samsung"); 
// iphone.setModel("10th gen");
// iphone.setPrice(80000); 

//* Getting value 
// console.log(iphone.getName());
// console.log(iphone.getCompany());
// console.log(iphone.getPrice()); 
// console.log(iphone.getModel()); 

//? When we use set and get keyword for getter and setter functions 
// accessing private property to set 
iphone.settingName = "iphone 16 promax"; 
iphone.settingCompany = "apple";  

// accessing private property to get 
console.log(iphone.gettingCompany); 
console.log(iphone.gettingName) 

//! We can access the private properties as an property not as a method previous we access. 

