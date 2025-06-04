//! Value and Done in Iterator 
//* An iterator object has two important properties: "value" and "done".

//? value property in iterator 
//* The "value" property holds the current element in the sequence that the iterator returns.
//* Every time we call the `next()` function, it returns an object with the current value.
//* This helps us access each element of the collection one by one during iteration.

//? done property in iterator 
//* The "done" property is a boolean (true/false).
//* It tells us whether the iterator has finished going through all elements or not.
//* When `done: true`, it means there are no more elements to iterate.
//* When implementing the `next()` method, we return both "value" and "done".


function createIterator(array) {
    let index = 0; 
   
    //* As we know that iterator object we create with the help of next function if any function which return object and it have next function than we create iterator object 
    return { 

        next: function() {
            if(index < array.length) {
                return {value : array[index++], done:false}
                //* As we see that next function returns object which have two property first was value which holds the iterator value and done property which shows the completion of iterator iterate all of the elements of it. 
            }else { 
                return { value: undefined, done: true };
           }; 
        } 

    };
}


const iteratorObject = createIterator([30, 20, 10]);

console.log(iteratorObject.next());
console.log(iteratorObject.next());
console.log(iteratorObject.next());
console.log(iteratorObject.next()); 


//? Why do we need "done" property in iterator?
//* In JavaScript, arrays are dynamic and can contain any type of data, even undefined.
//* So just checking if the value is undefined is not enough to say that the iteration is finished.
//* That’s why we use the "done" property — it clearly tells us when all elements are iterated.
//* This makes the iteration process accurate and reliable.



//* Another example of Iterator 
const myArray = [10 , 20, 30, 40, 50 , 60 ,70, 80 , 90 ]; 

//! In every array we have the property of [Symbol.iterator]  
//* Let access that property and create this array iterator 
const iteratorArr = myArray[Symbol.iterator](); 
//? This above line was syntax of accessing property [Symbol.iteraotr]() and create iterator object 
console.log(iteratorArr); 

//* Let iterate on this iteratorArr 
console.log(iteratorArr.next());  // Output : { value: 10, done: false }
console.log(iteratorArr.next());  // Output : { value: 20, done: false }
console.log(iteratorArr.next());  // Output : { value: 30, done: false }
console.log(iteratorArr.next());  // Output : { value: 40, done: false }
console.log(iteratorArr.next());  // Output : { value: 50, done: false }
console.log(iteratorArr.next());  // Output : { value: 60, done: false }
console.log(iteratorArr.next());  // Output : { value: 70, done: false }
console.log(iteratorArr.next());  // Output : { value: 80, done: false }
console.log(iteratorArr.next());  // Output : { value: 90, done: false }
console.log(iteratorArr.next());  // Output : { value: undefined, done: true } 



