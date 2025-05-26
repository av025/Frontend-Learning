//! JS is sync in Nature 
//* We have to keep two things in a mind that :- 
//? 1st. Javascript is Synchrounous in Nature 
//* Javascript was synchrounous in a nature means every thing in javascript was executed line by line. 
//? 2nd. Javascript was single threaded 
//* Here the single threaded means javascript execute every our line of our code one by one from top to bottom in sequence manner. 

//* Understand with example : 

// Declare function 
function fun() {; 
    console.log("Executed at Last !!!!");
}; 

console.log("First Executed !!!");  //! First Executed 

for(let i = 1; i < 1000; i++) {
    console.log(`${i}`) //! Second Executed 
}; 
console.log("Second Executed !!!!"); //! Third Executed after for loop processing


console.log("Third Executed !!!!"); //! Fourth Executed 

fun(); //! At last executed  

//* As we see that every line of code was executing in sequence manner and it wait for that execution complete so this how single thread in javascript work.... 

