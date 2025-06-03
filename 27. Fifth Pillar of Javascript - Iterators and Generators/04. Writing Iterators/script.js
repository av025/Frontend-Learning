//! Writing Iterators 
//* Let's write iterators and understand that how we can write iterators object in avascript 

function fetchNextElement(array) {
    let idx = 0; 

    function next() {
        if(idx === array.length) {
            return undefined; 
        }

        const nextElement = array[idx]; 
        idx++; 
        return nextElement; 
    }; 

    // return next;  
    return {next} //* we return next fun in an object 
};  

//! Here above we create custom iterator which help us to write declarative code 

//* Here we create declarative programming and call the automaticFetcher so it give every time the element of our array 
const automaticFetcher = fetchNextElement([99, 2, 5, 100]); 

// console.log(automaticFetcher());
// console.log(automaticFetcher()); 
// console.log(automaticFetcher());
// console.log(automaticFetcher()); 
console.log(automaticFetcher.next());
console.log(automaticFetcher.next()); 
console.log(automaticFetcher.next()); 
console.log(automaticFetcher.next()); 

