//! In this Project we demo the implementation and usage of redux core operation 
//* In Redux-core we used with every framework and another library. 

const { compose } = require("redux");

//? This Core Redux library have main 4 or 5 function with the help of it we can implement our redux library in our project. 
// 1st. compose
function removesSpaces(string) {
    return string.split(" ").join(""); 
} 


function repeatString(string) {
   return string.repeat(2); 
}

function transformToUpperCase(string) {
    return string.toUpperCase(); 
} 

const input = "abcd e f gh i jk"; 

//* Now we have to use all this function together as composition than we call all the function as callback there was our first approach
// const output = transformToUpperCase(repeatString(removeSpaces(input)));
 
// console.log(output); 
 
//? Second Approach use compose function from reduce 
const composedOutput = compose(removesSpaces, repeatString, transformToUpperCase) 
// This compose function also help to bind by our do composition of function and perform combine result which we do with approach one by CB function 
//! One thing to understand that this compose function order will be from Right to Left  
console.log(composedOutput(input)); 

// 2nd. createStore 
// 3rd. applyMiddleware 
// 4th. combineReducer
// 5th. bindActionCreator 