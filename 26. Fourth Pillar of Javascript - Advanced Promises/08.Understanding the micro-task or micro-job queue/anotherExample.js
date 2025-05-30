//! Another example of micro-task queue 

function consumePromise() {
    return new Promise(function executer(resolve, reject){
        console.log("Resolving the promises");
        resolve("Done");
    });

};

setTimeout(function() {
    console.log("Timer Ended !!!!");
},0);

const response = consumePromise(); 

response.then(function fulfillmentHandlerOne(value){
    console.log("fulfillment handler one with value ", value); 
}, function rejectionHandlerOne(value) {
    console.log("Rejection handler one with value ",value);
}); 

response.then(function fulfillmentHandlerTwo(value){
    console.log("fulfillment handler two with value ",value);
},function rejectionHandlerTwo(value){
    console.log("Rejection handler two with value ",value);
}); 


for(let i = 0; i < 100000000; i++) {
    //* Looping process 
};

console.log("Ending........");  


//* Here first all the global code execute means Javascript Native code execute  ----------> 
//* micro-task queue execute there store functions -----------> then macro-task queue function execute and this all thing was done by event loop. 

//! Between Micro-task queue and Macro-task queue , micro-task queue prioritized first and executed. 






