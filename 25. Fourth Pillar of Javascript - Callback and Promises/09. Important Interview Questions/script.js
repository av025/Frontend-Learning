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
// console.log("Hello World !!!!!");
// setTimeout(function() {
//     console.log("Timer Done !!!!!"); 
// },0); 
// for(let i = 1; i <= 10000000000; i++) {
//      Looping Process 
// }; 
// console.log("End");

//? Output : 
//* "Hello World !!!!"
//*  Here Processing was done not anything was printed 
//*  "End"
//*  "Timer Done"  
//! Asynchronous func was always executed at last............. 

//? Third Interview Question 
console.log("Hellooo !!!!!"); 
for(let i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log("Timer Done");
    },10); 
}; 
for(let i = 1; i < 100000000; i++) {
    // Looping process 
}; 
console.log("Ends"); 

//? Output : 
//* "Hello !!!!"; 
//* First for-loop processing  and setTimeout function task was also complete 
//* for-loop processing was complete 
//* "Ends"
//* Timer Done 
//* Timer Done 
//* Timer Done 
//! Asynchronous function was always executed at last..........




