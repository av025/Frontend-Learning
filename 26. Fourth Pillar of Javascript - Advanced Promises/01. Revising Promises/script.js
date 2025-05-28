//! Revising Promises 
//* Let revise promises in javascript with example 

//? As we know that promises are the special-type of javascript object which return immediately when we call it and it works as placeholder for data which we have in sometime later in future. This promise was native code  of javascript means it creation of promise of javascript in synchronous in nature but we can create asynchronous also as per our need.  

//?  Syntax of Promise 
//* new Promise(function(resolve,reject) {
//*  This resolve & reject function shows the state of our promise 
//*
//* })

//* We create the promise with the help of new keyword and Promise() Constructor inside this promise we pass the callback function with two callback argument resolve and reject 

//! Our Promise have mainly three state 
//? 1st. Pending State : This "pending" state was the default state where our promise do processing. 
//? 2nd. Resolve State : In this State if the promise was fullfiled than that was handle in "resolve" state it means that promise update it state and migrate to resolve state from pending. 
//? 3rd. Reject State : When the promise was rejected than it handle in "reject" state it means that promise update it state and migrate to reject state from pending. 

//! Similarly like State it return Value also 
//? 1st. When the state was pending than value was undefined 
//? 2nd. When the state was resolve the value updated and resolve state was assign to resolve argument callback 
//? 3rd. When the state was reject the value updated and reject state was assign to reject argument callback 



//* Example of Promise 
const voterInfor = {
  name: "Aaayush Vyas", 
  age: 17,
  nationality:"Indian"
};


function canCitizenVote() {
    return new Promise( function(resolve, reject) {
        if(voterInfor.age >= 18 && voterInfor.nationality === "Indian") {
            resolve("He was elgibile for vote !!!!");
        }else {
            reject("He was not elgibile for vote !!!!");
        }
    });
}; 


const voteOrNot = canCitizenVote();

console.log(voteOrNot);