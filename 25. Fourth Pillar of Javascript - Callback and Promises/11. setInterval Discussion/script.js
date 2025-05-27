//! setInterval Discussion 
//* This setInterval() was also async function like setTimeout() function which was also the timer function that run our function after some delay and this setInterval code was execute infinite after some interval let understand with example 


let number = 1; 

//* Create the function to increase it's number one by one : 
function increaseNum() {
    console.log(number++); 
}; 


//? Now we pass this increaseNum as a callback to setInterval function 
const firstInterval = setInterval(increaseNum , 3000); 
//* Now this setInterval asyn func execute this code after 3sec interval and execute infinte if we stop this interval with explicitly.  

let anotherNumber = 100; 

//* create anothe callback function 
function decreaseNum() {; 

    if(anotherNumber > 0) {
        console.log(anotherNumber--);
    }
};


//* use setInterval again 
const secondInterval = setInterval(decreaseNum, 3000);   


//! So it was run on infinite looping so we have another function to stop this setInterval function and it was clearInterval 

//* clear Interval function to clear the setInterval we are running !!!! 
clearInterval(firstInterval);  

clearInterval(secondInterval);  

//! Here we have to keep in the mind that setInterval was work different on different runtime on browser it associated with number ID with the help of it we can stop this setInterval func and in browser runtime its type was number , when we say in the term of nodejs so here its type was object as it...... 

//? Both setInterval and setTimeout are both the runtime function provide by Javascript runtime.....