//! When we have to use map 
//* In any situation when we have to do an operation to every element of an array and saved in a new array than we use map array method which was better approach 
//? Real life example In flipcart we create Array of product objects 

// let see example 
const productArray = [
    { nameOfProduct : "I-Phone",  priceOfProduct:60000},
    {nameOfProduct:"Laptop", priceOfProduct:100000},
    {nameOfProduct:"Cricket Bat", priceOfProduct:6000}
]; 

const priceOfProduct = productArray.map((indexValue) => {
    return indexValue.nameOfProduct;
}); 

console.log(priceOfProduct);
//! [ 'I-Phone', 'Laptop', 'Cricket Bat' ]