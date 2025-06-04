//! Debugging Iterators and Generators 
//* Let's debug the Generator and Iterator 

//* Example of generator function 
function* fetchNextElement() {
    console.log("Inside generator");
    const x = 10;
    yield 11; 
    console.log("Entering after the yield");
    const y = x + (yield 30); 
    console.log("Value of y", y); 
};

const iteratingNum = fetchNextElement(); 
//* Returns an iterator object from the generator function

console.log("First time ", iteratingNum.next());
//* When we call .next() for the first time, it starts executing the code until the first yield statement
//? Output: 
// Inside generator
// const x = 10;
// yield 11 — returns { value: 11, done: false }

console.log("Second time ", iteratingNum.next());
//* When we call .next() the second time, it resumes execution after the first yield,
//* executes the next line, and stops again at the second yield
//? Output:
// Entering after the yield
// const y = x + (yield 30); 
//* It doesn't calculate 'y' yet — it pauses and returns { value: 30, done: false }
//! yield here acts like a temporary return, pausing execution and sending control back

// console.log("Third time ", iteratingNum.next());
//* When we call .next() again without passing any value,
//* the second yield receives undefined by default
//* So y = 10 + undefined → y = NaN
//? Output:
// Value of y NaN
// Third time { value: undefined, done: true }
//! The generator function finishes here and marks done: true

console.log("Third time ", iteratingNum.next(10));
//! When we call .next(10), the 10 replaces the last paused yield (which was 'yield 30')
//* So now the expression becomes: y = 10 + 10 → y = 20
//* The generator resumes, computes the expression, logs the result, and finishes
//? Output:
// Value of y  20
// Third time  { value: undefined, done: true }

//! Whenever we passed the argument to .next() function of iterator object it replace the yield previous value and than generator start execution again  


//* Another Example of Generator func 

function* fetchNextElementSecond() {
  let incrementIterator = 0; 

  for(let i = 0; i < 10; i++) {
    incrementIterator++; 
    yield incrementIterator; 
}; 
}; 


const iterator = fetchNextElementSecond();  //* Generator function always return the iterator object 
//* So we can use .next() function for iterate 
console.log(iterator.next());  
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); 
console.log(iterator.next()); 