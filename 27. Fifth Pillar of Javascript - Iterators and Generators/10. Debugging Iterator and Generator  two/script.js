//! Debugging Iterator and Generator Two

//* Example of Generator Function 
function* fetchNextElement() {
    const x = 10;

    yield 11;  
    //* First yield → Pauses execution and returns {value: 11, done: false}

    console.log("Entering after a yield");

    const y = x + (yield 30);  
    //* Second yield → Execution pauses again and returns {value: 30, done: false}
    //* When resumed with .next(value), that value gets assigned to second yield expression

    console.log("Value of y is", y);  
    //* After getting value from .next(), y = 10 + value passed → prints result
};

const iterator = fetchNextElement();  
//* Generator function returns an iterator object

console.log("First", iterator.next());
//* First call to .next():
//  Starts execution, hits first yield (yield 11), pauses
//? Output: { value: 11, done: false }

console.log("Second", iterator.next());
//* Second call to .next():
//  Resumes after first yield → runs console.log("Entering after a yield")
//  Then hits second yield (yield 30), pauses again
//? Output: { value: 30, done: false }

console.log("Third", iterator.next(8));
//* Third call to .next(8):
//  8 is injected into the paused yield 30 expression → so y = 10 + 8 = 18
//  Executes console.log("Value of y is", 18)
//  Generator completes → returns { value: undefined, done: true }
//? Output: Value of y is 18
//?         Third { value: undefined, done: true }
