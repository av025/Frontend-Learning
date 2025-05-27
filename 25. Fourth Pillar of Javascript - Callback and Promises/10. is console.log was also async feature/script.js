//! Is console.log() was also async feature ? 

//* Let understand console.log was  async feature ?? 
//* Because it was not core javascript function. 
//* console.log was also the runtime feature which was provide by javascript runtime

console.log("Hello World !!!!"); 
for(let i =0; i < 3; i++) {
    setTimeout(function(){
        console.log("Timer Complete")
    }, 5000)
};
for(let i = 1; i < 10000000000; i++) {
    // Processing of Loop 
};
console.log("End");

//? Conclusion : Here the conclusion was its depend on usage how we use the console.log function if we are using for synchronous way than console.log was synchronous as we see in above code of "Hello World !!!" and "End" than we use in setTimeout() async code it work as asynchronous. 
//! Nature of console.log() was synchronous in nature !!!!! 
