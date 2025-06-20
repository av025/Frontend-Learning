//! Introduction to Iterator and Generator

//* Iterators
//? There was two types of programming language first one was "imperative" in which we give all the instructions what task to perform for example if we want to access every element of an array than we implement the code of it and in "declarative" style programming we just declare what task we want the programming language do task by it's own for example if we do console log

//* Let see imperative style example

/**
const myArr = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < myArr.length; i++) {
    console.log(myArr[i]);
}
*/

//* Let see the declarative style example
/** 
 * 
function fetchNextElement(arr) {
    let idx = 0;
    function next() {
    if (idx >= arr.length) {
      return undefined;
    }

    const newElement = arr[idx];
    idx++;
    return newElement;
}
return next;
}; 
*/
// const autoFetcher = fetchNextElement([1,2,3,4,5,6,7,8]);

/** 
 * 
console.log(autoFetcher()); 
console.log(autoFetcher()); 
for(let i = 0; i < 100000000; i++) {}; 
console.log(autoFetcher()); 
console.log(autoFetcher()); 
for(let i = 0; i < 100000000000; i++) {}; 
console.log(autoFetcher()); 
console.log(autoFetcher()); 
for(let i = 0; i < 100000000000000; i++) {}; 
console.log(autoFetcher()); 
console.log(autoFetcher()); 
*/

//? Let access the inbuilt iterator
// const myArr = [10, 20, 30, 40, 50, 60, 70, 80];

// iteratorMethod = myArr[Symbol.iterator]();
// console.log(iteratorMethod.next());
// console.log(iteratorMethod.next());
// console.log(iteratorMethod.next());
// console.log(iteratorMethod.next());
// console.log(iteratorMethod.next());
// console.log(iteratorMethod.next());
// console.log(iteratorMethod.next());
// console.log(iteratorMethod.next());
// console.log(iteratorMethod.next());

//* With this inbuilt iterator function it returns the iterator object which have three things first was next() function which helps to iterate our iterator object value
//* This next function return the another object which have two property first was value to update our iterable object and second was done which represent the state of our iterator object was full iterate or not.

/**
 
function fetchNextElement(arr) {
    let idx = 0;
  return {
    next: function () {
        if (idx >= arr.length) {
        return { value: undefined, done: true };
      }; 
      
      return {value: arr[idx++] , done:false}
    },
};
}


const fetchArrayElement = fetchNextElement([10,20,30,40,50,60]); 
console.log(fetchArrayElement.next());
console.log(fetchArrayElement.next()); 
console.log(fetchArrayElement.next()); 
console.log(fetchArrayElement.next()); 
console.log(fetchArrayElement.next()); 
console.log(fetchArrayElement.next()); 
console.log(fetchArrayElement.next());  
*/

//* Generator functions 
// So with the help of generator functions we can create our iterator function more superior because we can pause our iteraorable value also. 

//* Let's see the implement the generator function with asterik symbol 
/**

 function* generator() {
    console.log("Inside the generator !!!");
    yield 1;   
    //* When we used the yield keyword inside the generator than it will stop the execution of our generator function and comes outside of the generator function and continue after that yield statement. 
    console.log("Iterate First Value "); 
    yield 2; 
    console.log("Iterate Second Value"); 
    yield 3; 
    console.log("Iterate Third Value"); 
    yield 4; 
}; 


const generatorFun = generator(); 
 //? This generator function was return the iterator object than our generator function start execution.... 
console.log(generatorFun.next()); 
console.log("We first time come out of the function when yield keyword was triger");
console.log(generatorFun.next()); 
console.log("We Second time come out of the function when yield keyword was triger"); 
// console.log(generatorFun.next());
// console.log("We third time come out of the function when yield keyword was triger");
// console.log(generatorFun.next()); 
*/

//? Let's create another Generator function 
/**
 
function *generator(arr) {
    for(let i = 0; i < arr.length; i++) {
        yield arr[i]; 
    }; 
}; 


const iterator = generator([1,2,3,4,5,6,7,8]); 
console.log(iterator.next()); 
console.log(iterator.next()); 
console.log(iterator.next()); 
console.log(iterator.next());
console.log(iterator.next()); 
console.log(iterator.next()); 
console.log(iterator.next()); 
console.log(iterator.next()); 
console.log(iterator.next()); 

*/ 


function* generator() {
    console.log("Inside Generator !!!"); 
    const x = yield 10;  
    //? When the generator functions see the yield it's triger the pause and comes out of the 
    const y =  x + 10; 
    yield y; 
}; 

const iterator = generator(); 
console.log(iterator.next()); 
// console.log(iterator.next()); 
//* Output was NaN : because when we yield any thing so it mechansim wil save that value in iterator object so that x value become undefined. 
//* We can replace the value of the previous yield when we pass value to the next() function as an argument.  
// console.log(iterator.next(12));  // Output : 22 
// console.log(iterator.next("Aayush"));  // Output : "Aayush10"
console.log(iterator.next(100)); // Output : 110 



