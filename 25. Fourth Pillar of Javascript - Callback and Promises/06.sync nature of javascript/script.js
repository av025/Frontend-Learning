//! Sync Nature of Javascript 
//* As we know that javascript was in synchrounous in nature and we also understand two main points to keep in mind of javascript was : 

//? 1st. Javascript was synchrounous in nature that's means every javascript code of line executed line by line. 
//? 2nd. Javascript was single threaded it means that our code was executed line by line or we say in sequence and its wait upto first code was executed or not than it's execute the later js code . 

//! This synchrounous execution only done on the ecmascript standard valid code which was mention in document let understand with an example : 

console.log("Starting");  
//* Execute first 

for(let i = 1; i< 10000000001; i++) {
    // Do some processing upto 1000000001
}; 
//* Second Execute 
//? Below code was waiting for execution upto this for loop was executed 

console.log("End") 
//* Third Execute  

//! In single Thread every js code was execute in single manner and wait upto current code was execute  

//! Javascript also handle the Asynchrounous operation also with some mechanism let understand with example 
//* We use setTimeout asynchronous function which takes a callback func and time in milliseconds to execute our code 
//? The Meaning of Asynchrounous was our code was execute at some time of interval not immediately like synchronous way 
setTimeout(function () {
    console.log("setTimout async function executed !!!!"); 
},2000);  //* We give 2000 mili-seconds to execute means 2s in term of seconds 
//! Here we see that our javascript asynchronous was execute after the synchronous execute and why it was not execute after 2sec

