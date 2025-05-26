//! Important Interview Questions 

//? Interview Question First : 

// console.log("Hello World !!!!");
// setTimeout(function() {
//    console.log("Timer Done !!!!"); 
// }, 0); 
// console.log("End");

//? Output  : 
//*  "Hello World !!!!" 
//* "End"
//* "Timer Done" 
//! Asynchronous func was always executed at last..................


//? Interview Question Second : 
console.log("Hello World !!!!!");
setTimeout(function() {
    console.log("Timer Done !!!!!"); 
},0); 
for(let i = 1; i <= 10000000000; i++) {
    //* Looping Process 
}; 
console.log("End");

//? Output : 
//* "Hello World !!!!"
//*  Here Processing was done not anything was printed 
//*  "End"
//*  "Timer Done"  
//! Asynchronous func was always executed at last............. 


