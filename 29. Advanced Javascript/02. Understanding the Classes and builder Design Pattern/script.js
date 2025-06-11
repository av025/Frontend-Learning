//! Understanding the Classes and builder Design Pattern

// const object = {
// x: 10,
// y: 20,
// fun: () => {
// console.log(this, this.x, this.y);
//* Here this keyword resolve globally because of lexical enviornment and arrow function don't have it this keyword.
// },
// };

// object.fun();
//* Output :  {}     undefined  undefined
//     Golbal Object   x value   y value

// const objOne = {
// this: "abc",
// fun: function () {
// console.log(this); //* Here it represent the object itself
// },
// };

// objOne.fun();
// console.log(objOne.this);

//? Problem with constructor class
// class Product {
//* If we want to make data member private than we use access modifier "#" with this hashtag symbol.
// #productName;
// #productModel;
// #productCompany;
// #productPrice;
// #productDescription;
// #productReviews;
// #productRatings;

//! We can't private the constructor method because it was reserved word in class and we used only one constructor as we know that in javascript constructor overloading was not applicable
// constructor(product, model, company, price, description, reviews, ratings) {
// this.#productName = product;
// this.#productModel = model;
// this.#productCompany = company;
// this.#productPrice = price;
// this.#productDescription = description;
// this.#productReviews = reviews;
// this.#productRatings = ratings;
//! With the help of Access Modifier we can't access the data member outside the class and also can't see the any properties of it.
// }

//* If we can't access and see the property outside the class than how we will set the price.
//? So anybody can't set the any value
// setproductName(name) {
//   if(typeof name === "string") {
//     this.#productName = name;
//   }else {
//     console.log("Invalid value");
//   };
// };

// setproductModel(model) {
//   if(typeof model === "string") {
//     this.#productModel = model;
//   }else {
//     console.log("Invalid value");
//   };
// };

// setproductPrice(price) {
//   if(typeof price === "number" && price > 0) {
//     this.#productPrice = price;
//   }else {
//     console.log("Invalid value");
//   };
// };

// setproductDescription(description) {
//   if(typeof description === "string") {
//     this.#productDescription = description;
//   }else {
//     console.log("Invalid value");
//   };

// };

// setproductReviews(reviews) {
//   if(typeof reviews === "string") {
//     this.#productReviews = reviews;

//   }else {
//     console.log("Invalid value");
//   }

// };

// setproductRating(rating) {
//   if(typeof rating === "number" && rating > 0) {
//     this.#productRatings = rating;
//   }else {
//     console.log("Invalid value");
//   };
// };

//* We can use the set keyword as an shortcut
// set settingNameOfProduct(name) {
// if(typeof name === "string") {
// this.#productName = name;
// }else {
// console.log("Valid Value");
// };

// };

//? getter method to access the private value outside our classes
// getproductName() {
//      console.log(this.#productName);
// };

// getproductModel() {
//   console.log(this.#productModel);
// };

// getproductPrice() {
//   console.log(this.#productPrice);
// };

// getproductDescription() {
//   console.log(this.#productDescription);
// };

// getproductReviews() {
//   console.log(this.#productReviews);
// };

// getproductRating() {
//   console.log(this.#productRatings);
// };

//* We use the get keyword also for as shortcut
// get gettingNameOfProduct() {
//  console.log(this.#productName);
// };

// buyProduct() {
// console.log("Product bought");
// }

// cancelProduct() {
// console.log("Cancel Product");
// }

// addToCart() {
// console.log("Add to Cart Product");
// }

// removeFromCart() {
// console.log("Remove from Cart");
// }

//* We can create private members also ......
// showProductDescription() {
//   console.log("Show Product Description ", {
//     product: this.#productName,
//     company: this.#productCompany,
//     desciption: this.#productDescription,
//     model: this.#productModel,
//     ratings: this.#productRatings,
//     reviews: this.#productReviews,
//     price: this.#productPrice,
//   });
// }
// }

//! In this above implementation there was some security implementation problem so anyone can update our object property like in below we see that we assign productPrice value -1200000, now we used the concept in the oops was "Encapsulation". It says that classes are the bundles of implementation in themselves. In any case we should not be required to modify our data member of class outside of the class. Why because then our data memebers will be allocated any random value without any issue.

// const iphone = new Product(
//   "iphone 16 promax",
//   "16th Generation",
//   "apple",
//   120000,
//   "ios operating system 16th generation",
//   "Nice Phone",
//   4.5
// );

// console.log(iphone); // Output : Product { }

//* We can't access the private properties outside the classes
// iphone.#productPrice = 80000;

//? Let we update any property than it create that property as new
// iphone.productName = "Another phone";

// console.log(iphone);
//* Product { productName: 'Another phone' } the new property was created here and we can access it.
// console.log(iphone.productName);  // We can access the value because it created new property.

// iphone.setproductPrice(-2000); //* Invalid value because we give negative value.
// iphone.setproductName(12345678);  //* Invalid value because we giv negative value.

// iphone.setproductPrice(80000);

//* Accessing the private property with the help of getter method
// iphone.getproductName();
// iphone.getproductModel();
// iphone.getproductDescription();
// iphone.getproductPrice();
// iphone.getproductRating();
// iphone.getproductReviews();

//* With the use of set and get keyword we can access the getter and setter function as an property not as function

//? accessing the setter function as property.
// iphone.settingNameOfProduct = "IPHONE 16 PRO MAX";
//? accessing the getter function as property.
// iphone.gettingNameOfProduct;
// iphone.showProductDescription();

//! In Javascript Classes implementation was work as  wrapper only this classes  feature was not introduced in javascript it was introduced recently

//* Let we create the Object from the function
// function Product(placeholderName, placeholderPrice, placeholderDescription) {
// * As we know that every function declaration and function expression have the access to "this" keyword
// this.name = placeholderName;
// this.price = placeholderPrice;
// this.description = placeholderDescription;

// this.displayProduct = function () {
//   console.log("Name:", this.name, "Price:", this.price, "Description:", this.description );
// };

//* Lets return object
// return {name:"Aayush Vyas"};
//? When we return Object from constructor function than it points to that object we  returning
//* When we return primitive value than
// return "Something";
//? When we return primitive value from constructor function than it was not affecting the value of this keyword.
// };

//* This above function was also work as constructor when we use the new keyword than it create instance of object from it.
// const productOne = new Product("iphone 16 pro max", 120000, "ios operating system 16 gb ram  with 256GB Internal Storage");
//? When we used the "new" keyword it used as to create the new plain and empty object and it call this above Product constructor Function.

// console.log(productOne);
//* It work same as class constructor but it was Function constructor so before classes introduced to the javascript we used the function constructor.

//! In Classes mechanism when we use "new" keyword than it will call the constructor function by default if we implement or implement same thing.

// const productTwo = new Product();
//? In the Case of returning the Object {}
//* It was returning that Object { name:  'Aayush Vyas'}

//? In the Case of returning the Primitive value
/**
 * Output : Product {
 * name: 'iphone 16 pro max',
 * price: 120000,
 * description: 'ios operating system 16 gb ram  with 256GB Internal Storage'
 * }
 **/

// productOne.displayProduct();

//? When we don't use the new keyword than what happens ???
// const productTwo = Product();
//* This function was work normal like function and execute like normal function also.....
// console.log(productTwo);  // Output : undefined
//* output was undefined because we can't returning from out Product function.

// class Product {
//? There was the static keyword which create variable or Data Member it associated with classes not with object we create
// static myVariable = "Something Variable";  //* Here we create static data member
// Here we create the static data member with static keyword so this data member was associated with Class not with product

//* we can do private our static variable too !!!
// static #myVariable = "ABCDEFG";
//? There was no sense to create private this static data member so we keep it always accessible

// constructor(name, company, price) {
// this.productName = name;
// this.productCompany = company;
// this.productPrice = price;
// Can we access inside the constructor function
// console.log(myVariable);
//* It give error to us that myVariable was not defined
//? We have to access that myVariable with the help of Product class only.
// console.log(Product.myVariable);
//  };
// };

// const productOne = new Product("iphone 16 pro max", "apple", 120000);
//* Let see can we access the myVariable with instace of object we create
// console.log(productOne.myVariable); // Output : undefined
// console.log(Product.myVariable); // Output : Something Variable
//? We can update also....
// Product.myVariable = "ABCD";
// console.log(Product.myVariable);
//* Accessing the private static data member too !!!
// const iphone = new Product({productName:123 , productPrice:123});
// console.log(iphone); // Output : {}

// const iphone = new Product({productName :"iphone", productPrice : "123"});
// console.log(iphone); // Output : {}

//* There was one problem in our code and which was validation at the time of object creation when we pass the arguments in our constructor function and we resolve that problem with Builder Pattern

class Product {
  #name;
  #price;
  #company;

  constructor(builder) {
    // Corrected property access from builder (removed 'product' prefix)
    // and using typeof for type checking.

    // Always assign if possible, and add validation if desired.
    if (typeof builder.name === "string" && builder.name.length > 0) {
      this.#name = builder.name;
    } else {
      console.warn("Product name must be a non-empty string.");
      // Consider throwing an error here if name is mandatory:
      // throw new Error("Product name is required.");
    }

    if (typeof builder.price === "number" && builder.price > 0) {
      this.#price = builder.price;
    } else {
      console.warn("Product price must be a positive number.");
      // Consider throwing an error here if price is mandatory and invalid:
      // throw new Error("Product price must be a positive number.");
    }

    if (typeof builder.company === "string" && builder.company.length > 0) {
      this.#company = builder.company;
    } else {
      console.warn("Product company must be a non-empty string.");
    }
  }

  // Add getters to access private properties
  get name() {
    return this.#name;
  }

  get price() {
    return this.#price;
  }

  get company() {
    return this.#company;
  }

  static get Builder() {
    class Builder {
      constructor() {
        this.name = "";
        this.price = 0;
        this.company = "";
      }

      setName(incomingName) {
        // Renamed parameter for better clarity
        this.name = incomingName;
        return this;
      }

      setPrice(incomingPrice) {
        this.price = incomingPrice;
        return this;
      }

      setCompany(incomingCompany) {
        this.company = incomingCompany;
        return this;
      }

      build() {
        return new Product(this);
      }
    }
    return Builder;
  }
}

//? Lets call the Class
const productBuilder = new Product.Builder();

const productOne = productBuilder
  .setName("iphone 16 promax")
  .setPrice(1200)
  .setCompany("apple")
  .build();

console.log(productOne);
console.log(productOne.name); // Access using getter
console.log(productOne.price); // Access using getter
console.log(productOne.company); // Access using getter
