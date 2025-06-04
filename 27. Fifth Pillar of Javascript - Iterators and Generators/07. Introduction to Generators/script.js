//! Introduction to Generators 
//* In the previous concept, we saw the iterator object — which helps return values step-by-step using the .next() method.
//* In imperative methods like for-loop or while-loop, the loop runs directly — and each step executes immediately.
//* Iterator makes this process a bit more declarative and gives us manual control over each iteration step.

//! Generators are also special functions used for iteration, but unlike regular iterators, they do not run continuously. With generators, we can pause the iteration and resume it later — which gives us more control over the execution flow.

//? Generators :- 
//? Generator functions take this concept one step further:
//? 1.  You define a generator using the 'function*' syntax.
//? 2. With each 'yield', the execution is paused.
//? 3. You can resume the next step of the function whenever you want using the .next() method.
//! 4. Generator function return us the iterator object 


//* Let understand what are the generators function in javascript by creating it as an example 
function* fetchNextElement() {
    //? This fetchNextElement was generator function because it's syntax was function* asterik means generator function. 
    console.log("We are inside the generator function !!!!"); 
    yield 1 ; //* When we are using yield than it means execution pause 
    yield 2; 
    console.log("Somewhere in the middle"); 
    yield 3;
    yield 4; 
    return 10; 
    //* When we use the return statement in our generator than function stop executing after that. 
    //? So it stop executing than value was given to value property and done property value become true it means all element of iterable was iterated.  { value: 10, done: true }
    yield 5; 
}; 


const iterateOnElement = fetchNextElement();  //* Calling the generator func
//! Whenever we call the generator function it doesn't start executing the function immediately 

//* As we know that generator function was returning the iterator object 
console.log(iterateOnElement.next()); 
//? Output : 
//? We are inside the generator function !!!! 
//? {value : 1 , done: false}
//* After that execution pause because of yield keyword  
console.log(iterateOnElement.next()); 
//? Output : 
//? {value : 2 , done : false }
//* After that execution pause because of yield keyword 
console.log(iterateOnElement.next()); 
//? Output : 
//? Somewhere in the middle 
//? {value: 3, done: false} 
//* After that execution pause because of yield keyword 
console.log(iterateOnElement.next()); 
//? Output : 
//? {value: 4, done: false}
//* After that execution pause because of yield keyword 
console.log(iterateOnElement.next()); 
//? Output : 
//? { value: undefined, done: true }

//! What was yield keyword doinghere in this generator function ? 
//* This "yield" keyword we say work as to temperory return the value and pause the exceution of generator function which was implement in the generator function and this generator function implement was stored in the Iterator object which it was return so here the "yield" keyword help to continue as the execution of generator function without this our generator function return iterator object was pause.  

//? Revise the function of yield again 
//* The "yield" keyword in a generator function acts like a temporary return — it pauses the execution and returns a value.

//* When a generator function is called, it doesn't run immediately. Instead, it returns an iterator object.

//* The actual execution of the generator function starts when we call the .next() method on that iterator object.

//* Inside the generator, each "yield" pauses the function and returns control to the caller, along with the current value.

//* The "yield" keyword helps continue the generator function's execution step-by-step. Without it, the generator would either finish immediately or not pause at all.


