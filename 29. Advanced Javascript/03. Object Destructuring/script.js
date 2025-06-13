//! Object Destructuring

//* Let create class again and get builder function to do debugging and understand code
// class Product {
//? Create private Data Members with the help of access modifier so any one can't add non-provide value to our data members and can't access it.
//   #productName;
//   #productCompany;
//   #productPrice;

//? There we have two option first was use constructor function to input values of our data member from use or use getter setter function to set the value and get the value when we do private our data members

//! But there was the problem with constructor that we have to pass the multiple or we say lot of parameters and create difficult to manage the constructor function so we passed the builder object so we pass the value as object property.

//   constructor(builder) {
// this.#productName = builder.name;

// if (typeof builder.price === "number" && builder.price > 0) {
//   this.#productPrice = builder.price;
// }

// this.#productCompany = builder.company;
//   }

//* When we have the getter and setter function also for encapsulation but we can't do the validation before the object creation also....

//   static get Builder() {
//* This get Builder have the another Builder class
// class Builder {
//* Here we create the constructor in which this.name, this.company and this.price have the default value.
//   constructor() {
// this.name = "";
// this.company = "";
// this.price = 0;
//   }

//* Here we create the set functions in which we set the user assigning value
//   setProductName(incomingName) {
// this.name = incomingName;
// return this;
// Here we return this keyword which refer to callsite and it was this constructor object of Builder
//   }

//   setProductCompany(incomingCompany) {
//     this.company = incomingCompany;
//     return this;
//   }

//   setProductPrice(incomingPrice) {
//     this.price = incomingPrice;
//     return this;
//   }

// Here is the build() Member Function in which we have returning the new Product(this) it means creating the Product constructor in which we are calling the Product constructor which refer to this keyword means that object which was created with the help of this Builder constructor.
//       build() {
//         return new Product(this);
//       }
//     }

//     return Builder;
//   }

//   getAllProperties() {
//     console.log(
//       `product name : ${this.#productName}, product price :${this.#productPrice}, product company:${this.#productCompany}`
//     );
//   }
// }

// const builder = new Product.Builder();
// console.log(builder);

// const productOne = builder
//   .setProductName("S 10")
//   .setProductCompany("Samsung")
//   .setProductPrice(80000)
//   .build();

// console.log(productOne);

// productOne.getAllProperties();

//? Object Destructuring
//* With the help of Object Destructuring which was mechanism using with it we can unpack the value from the object or we say we can extract the key-pair value and pass in distinct.

// const product = {
//   productName: "Iphone 16 promax",
//   productCompany: "apple",
//   productPrice: 120000,
// };

//* Let's do destructuring of Object
// const { productName, productCompany, productPrice: price } = product;
//? Here we do destructuring of object and extract or unpack key-pair value in distinct variable.
//* Here we extract our object key-pair value as a same key-identifier if we give other name than it become undefined as we see in the case of price variable which we are extracting if we want to give other name that variable than we do alias of key name
// console.log(productName , price, productCompany);
// Output : Iphone 16 promax 120000 apple

//* Let create another object
// const productOrder = {productId:1, productOrderTime:"13/06/2025", ...product}; //? Here we use ... spread operator
//* Now here we use spread operator ...<Non-primitve-value> so it was unpack the product key-value pair in this productOrder.
// console.log(productOrder);

//? What if we have the same property in this object like productPrice
// const productOrder = {
//   productId: 1,
//   productOrderTime: "13/06/2025",
//   productPrice: 80000,
//   ...product,
// };

//? Here the the last property of  productPrice was taken by object because it was updated when we used the spread operator and it was like updating the old productPrice property.

// console.log(productOrder);

//? Now let Destructuring the Nested Objects
const product = {
  productName: "iphone 16 promax",
  productPrice: 120000,
  productCompany: "apple",
  productCategory: {
    categoryId: 12,
    categoryType: "Electronics",
    categoryName: "Mobile",
  },
};

//* Now in this product object we have the nested object productCategory

//* Way - One :- Extracting key-pair value separately
// First Step destructring "product Category"
// const { productCategory } = product;

// console.log(productCategory);

// const { categoryId, categoryType, categoryName } = productCategory;
// console.log(
//   "categoryId: ",
//   categoryId," , ",
//   "categoryType: ",
//   categoryType,
//   " , ",
//   "categoryName: ",
//   categoryName,
// );

//* Way two extract all value together
// const {productName, productPrice , productCategory: {categoryId , categoryType , categoryName}} = product;

// console.log(productName , productPrice);
// console.log(categoryId , categoryName , categoryType);

//? If we do combine two object than we do with the help of spread operator
// const objectOne = { x: 1, y: 2, z: 3 };
// const objectTwo = { a: 1, b: 2, c: 3 };
//* Than combine two objects 
// const combineObject = {...objectOne , ...objectTwo}; 
//* Using spread operator to spread the value of objectOne and objectTwo 
// console.log(combineObject);
// { x: 1, y: 2, z: 3, a: 1, b: 2, c: 3 } 

//* If we do cloning our object than we help the spread operator only... 
// const cloningCombineObject = {...combineObject};  
// Here also we used the spread operator to clone 
// console.log(cloningCombineObject);
// Output : { x: 1, y: 2, z: 3, a: 1, b: 2, c: 3 } 

//* Updating the key-pair value in object 
const productOne = {
  name:"Product One",
  price:10000,
  company: "Company One"
};


//* Now update the property of this object in new object 
const updatedProductOne = {
  ...productOne, description:"Some Description", discount:"100%"
}; 
//* First we destruct the all property of productOne than give new key-pair value 
console.log(updatedProductOne);
/** 
 * {
 *   name: 'Product One',
 *   price: 10000,
 *   company: 'Company One',
 *   description: 'Some Description'
 * }
 */ 

//* We can give deaful values at the time of destructure also let see that alos 
// const {name , price, company, description, discount = "100%" } = updatedProductOne; 
//* Here we give default value discount so we can pass default key-pair value also 
// console.log(name, price , company, description, discount)  

//? REST Parameter 
//* The operation of spread operator and rest operator was the same we used three dot operator "...<Non Primitive value>" but both have the different mechanism. 

//* When we unpack the value from any object or array or non-primitve value than we are using Spread operator 
//? When we pack all the values into Non-primitive value like object , array etc than there we are using Rest operator. 
//* This rest parameter we are using in the function parameter 

// Let see example of REST parameter : 
const { discount, ...packedAllProduct } = updatedProductOne; 

//* So here we extract the discount value and than with the help of  Rest parameter "..."  we packed all the value in to one object 
console.log(discount , packedAllProduct);
/** 
 *  100% {
 *          name: 'Product One',   
 *          price: 10000,
 *          company: 'Company One',
 *          description: 'Some Description'
 *    }
 */ 

//* Another example of Rest params 
function arrayElements(totalElements, ...arrayElements) { 
  console.log("totalElements: ", totalElements ,"Array Elements: ", arrayElements)
}; 
arrayElements(6,10, 20 ,30 ,40 , 50 , 60);

//! Here we have to understand that when we give rest property than it was return the object in the object if we used as an function parameter or we say rest parameter than it return array. 

//* Sum of array element 
function sum(...allElements){
  let value = 0;
  for(let idx = 0; idx < allElements.length; idx++) {
   value += allElements[idx];

  }; 
   console.log(value);
}; 

sum(10 , 20 , 30 , 40); // Output : 100

sum(30, 50, 60, 80); // Output : 220

//? Destructring of the Array 
//* Same like Destructring we do in object 

const marks = [50, 60 , 70, 90]
//* Lets destructure elements of array from array 

const [phyiscs , chemistry, maths , english, physicalEducation = 74] = marks; 
//? Destructuring the elements from an array and when we do destructuring of array the ordering was matter because we access our element in the basis of index value 

console.log(phyiscs, chemistry, maths, english, physicalEducation);

//* Let do nested destructuring 
const nestedArray = [10, 20, 30, [40, 50 , 60]]; 

const [firstElement, secondElement, thirdElement, [fourthElement , fifthElement , sixthElement]] = nestedArray;

//* Custom useState hook in the javascript 
function useState(parameter) {
  let value  = parameter; 
  const setValue = function() {
    return ++value; 
  };

  return [value , setValue]; 
}; 

//* This above function useState return the array let destructure it 
const [someValue , setSomeValue] = useState(10); 
//* Here we destructure array elements from function useState() 
console.log(someValue , setSomeValue()); 
//* Output : 10 , 11  

