//! Predict the output of promise 3 
console.log("Start of the file");

setTimeout(function timerOne() {
    console.log("Timer One Ended !!!!");
},0); 


for(let i = 0; i < 100000000000; i++){
    //* Looping process 
}; 


const x = Promise.resolve("Aayush's promise"); 
x.then(function resolvePromise(value){ 
    console.log("Whose Promise !!!!!! ", value);

}); 


setTimeout(function timerTwo() {
    console.log("Timer Two Ended !!!!");
},0); 

console.log("End of the File"); 


//? Output of the above code : 
//* Start of the file 
//* End of the file 
//* Whose Promise !!!!!!, Aayush's promise 
//* Timer One Ended !!!!
//* Timer Two Ended !!!! 


