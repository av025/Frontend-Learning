//! Exploring the yield more !!!!

function* fetchNextElement() {
  console.log("Inside Generator !!!!");
  const x = 10;
  console.log(yield 11);
  console.log("Entering after a yield");
  const y = x + (yield 30);
  console.log("Value of y is ", y);
}

console.log("Start");
const iterator = fetchNextElement();   
//* This fetchNextElement() returns an iterator object, stored in "iterator"

console.log("First ", iterator.next());
//* On first call to iterator.next(), execution starts and runs until the first yield
//? Output:
// Inside Generator !!!!
// Execution pauses at: console.log(yield 11)
// Yield 11 returns this object: { value: 11, done: false }
// But console.log(...) is not printed yet because we haven’t resumed

console.log("Second ", iterator.next(55));
//* Second call to .next(55) resumes from the previous yield
//* The passed value (55) replaces the previous yield, so console.log(55) runs
//? Output:
// 55                      ← from console.log(55)
// Entering after a yield  ← next statement
//* Execution again pauses at: yield 30
//* Returns: { value: 30, done: false }

console.log("Third ", iterator.next(17));
//* Now we pass 17 to the next() function — this replaces yield 30
//* So y = 10 + 17 = 27, and console.log("Value of y is ", 27) runs
//? Output:
// Value of y is  27
// Third { value: undefined, done: true }

console.log("End");


