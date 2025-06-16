//! Coercion

//? ToPrimitive(input [, preferred type]);
//* In this ToPrimitive abstract operation it takes two argument first was input which we want to convert into primitive type and there was another argument which was optional called preferred type so this argument depend on the first argument mainly.
//* This ToPrimitve() method was return primitive value from non-primitive value like objects, array etc.
//* The End-Goal of this toPrimitive() argument is to convert non-pritimive entity into primitive type

//? Let understand how this ToPrimitve(input [, preferred type])
//* 1st. Assert input was the valid Ecmascript or Javascript value or not.
//* 2nd. If input type was an Object :
//*   a. if the Preferred type is not present, let hint be "default" {default string};
//*   b. else if Preferred type is String, let hint be "string";
//*   c. else Preferred type is Number, let hint be "number"{number string};
//*   d and e steps are not more relevant right now....
//*   f. if the hint was "default" then assume it "number" only.
//*   g. Return? OrdinaryToPrimitve(input hint)
//? At the last This ToPrimitive() method return another abstract operation with resulted input value and hint pass an argument to another abstract operation which was OrdinaryToPrimitive()

//? OrdinaryToPrimitive(input, hint);
//* 1st. Assert the input was O or not here O refers to object.
//* 2nd. Assert the hint type was String and it's value is either "string" and "number".
//*   2.1. If the hint was "string" than it create the array which name was methodNames in which we have to method was ["toString", "valueOf"]
//*   2.2 If the hint was "number" than it create the array which name was methodNames in which we have to methond was ["valueOf", "toString"]
//! This Method toString and valueOf are not abstract method they are present in javascript and we can use that too!!!
// const objOne = {};
// console.log(objOne.toString()); //* Otp : [object Object]
// console.log(objOne.valueOf());  //* Otp : {}  refer to this Object

//*   2.3. For each name in methodNames in list order, do
//*  a. let method be? Get(O,name); here we check that methods toString() and valueOf() was there or not with the help of looping checking
//*  b. If those method are callable or not if Callable(method) true, then
//*   first step. Call the method is callable
//*   second step.if the result of the method was not non-object than we go in looping again and do on another method among one which was remaining if the result was non-object return result of that.
//* 2.4 if the object was not convert into non-primitive value than return the Type Error

//* 3rd. Return the input value

//? Let see more example of toString() and valueOf()

//* First we see the default implementation of toString() and valueOf()

// const objTwo = {};
// console.log(objTwo.toString());  //* Output : [object Object]
//? It return the string with [object Object]
// console.log(objTwo.valueOf()); //* Output : {} refers to that object only.

//* Let's override the toString() and valueOf() method
// const objThree = {
//   a: 10,
//   b: "Aayush Vyas",
//   toString: function () {
    // return "Aayush Vyas";
//   },
//   valueOf: function() {
    // return 10; 
//   }
// };

// console.log(objThree.toString()); //* Output : Aayush Vyas 
// console.log(objThree.valueOf(), typeof objThree.valueOf());  //* Output : 10 , number 
/** Default valueOf() method return the objThree 
 *  { a: 10, b: 'Aayush Vyas', toString: [Function: toString] }
 */


//! We used ToNumber() abstract operation to call the toPrimitive() abstract operation 
// let do coercion and check what was output comes 
// const objFour = {
    // x:10, 
    // valueOf() {
// return {}; //* When we return object than it give Type Error cannot convert into primitive value;
    // return this.x;
// }

// }; 
// console.log(10 - objFour); //* Output : NaN default valueOf refers to the object only
// console.log( 10 - objFour); //* Output : 0 when we do override the toString()


//? More example 

const obj = {
    x:20, 
   toString : function() {
    return `${this.x}`
   }
}; 

console.log(typeof obj.toString()); // string type 

console.log( 40 - obj, typeof(40 - obj)); // Output :  20 , number 

const objOne = {
    x:3000, 
    valueOf: function() {
        return this.x;
    } 
}; 


console.log(10 - objOne);  //* Output : -2990 

//* Usecase of this method 
class Product {
    productName; 
    productPrice;
    constructor(n,p) {
        this.productName = n; 
        this.productPrice = p; 
    }; 

    valueOf() {
        // return  this.p; 
      return this.productPrice;
    }
}; 

const productOne = new Product("product One", 12000); 

console.log(10 - productOne);  
//* NaN because p value was not exist in this Product constructor 

//* let see more operation on object 
const productTwo = new Product("product Two", 10000); 

console.log(productOne > productTwo);  //* Output : true 
console.log(productTwo > productOne); //* Output : false 


//? Some Cases 
console.log( 1  < 2 < 3); // Output : true 
//? Here Coercion take place let understand how internally this expression evaluate 
//* As we know that Compariosn operator perform the coercion 
//  1 < 2  = true  --> toNumber(true)  < 3 ---> 1  < 3  = true that's why output was true 

console.log(3 > 2 > 1); // Output : false 
//? Here also Coercion take place let understand how internally this expression evaluate 
//* As we know that comparison operator perform the coercion 
//  3 > 2  = true toNumber(true) > 1  ---> 1 > 1 = false that's why output was false 


//? Explicit Type conversion 
//* In javascript there was many Explicit type conversion was also present which manually convert one type to another. 

function numberTypeConversion(argument) {
    return Number(argument); 
    //* This Number() method convert any argument into Number only... 
} 

const boolNumType = numberTypeConversion; 
console.log(boolNumType(true)); //* Output was 1  
console.log(boolNumType(false)); //* Output was 0 

const undefinedNumType = numberTypeConversion(undefined);
console.log(undefinedNumType); //* Output : NaN 

function stringTypeConversion(argument) {
    return String(argument); 
    //* This String() method will convert any argument into String only.... 
};


const numStrType = stringTypeConversion; 
console.log(numStrType(0));  //* Output : 0 and it's type was string 
console.log(numStrType(-0)); //* Output : 0 only no negative sign added 

//? Some Exception 
console.log(NaN === NaN); //* Output : False 
//?  NaN value never we equal to another NaN  

function checkNaN(argument) {
    return argument !== argument;  
    //! As we know that only NaN  was not  equal to each other in javascript 
}; 

console.log(checkNaN(undefined));
console.log(checkNaN(null)); 
console.log(checkNaN(NaN));  // Output : true 
console.log(checkNaN(0 / 0)); // Output : true  

//* There was some inbuilt methods also 
//? isNaN()
//* In this method there was one flaw and it was in argument if we pass the NaN value than return true but it does not check the value we pass an argument was type number or not and it give true for non-number also 

console.log(isNaN(NaN)); // Otp : true 
console.log(isNaN("Aayush"));  // Otp : true 

//? Number.isNaN()
//* This Number.isNaN() was correct version of isNaN() so it check also the argument we pass was number type NaN or not 
console.log(Number.isNaN(NaN)); // Otp : true 
console.log(Number.isNaN("Aa")); // Otp : false  


//? In Javascript there was positive +0 or 0 and negative -0 present so there was also problem in abstract and strict equality they give us true so how can we check which 0 was positive and which was negative. 

console.log(0 === -0); 
console.log(0 == -0); 
//* Both the console statement print true in terminal 

//? there was another inbuilt method in javascript was Object.is() which check correctly anf give output 
console.log(Object.is(0 , -0)); //* Output false  


//? Autoboxing concept 
//* In this concept we convert our primitive value into non-primitive value and apply methods of Non-primitive value like object 

let x = 10; 
console.log( x.toString() , typeof x.toString());
//  Output :   10, string 

console.log(x.valueOf(), typeof x.valueOf());  

let y = "Aayush"; 
console.log(y.toString(), y.valueOf());

//* In the case of literals value means we can't storing data type in variable than those variable are called literal. we do wrapper of round synthesis of our literal value 
// 10.toString() //? Here it give type error to us.... 
console.log((10).toString());