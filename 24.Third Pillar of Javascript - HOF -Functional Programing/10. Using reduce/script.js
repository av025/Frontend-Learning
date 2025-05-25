//! Using Reduce
//* We can use reduce to calculate the total price from our cart and if we order any food from food-delievery app than also let see both condition as example

//? Product Cart Example
const cart = [
  { productName: "Laoptop", productPrice: 100000 },
  { productName: "I-Phone", productPrice: 80000 },
  { productName: "PS-5", productPrice: 50000 },
];

const totalPrice = cart.reduce((accumulator, initialValue) => {
  // return previousValue.productPrice + initialValue.productPrice; //! It take previous value as object so here we have to pass accumulator and its value
  return accumulator + initialValue.productPrice;
}, 0);

console.log(totalPrice);

//? Food-Delivery price total
const orderedFood = [
  { name: "Biryani", price: 1000 },
  { name: "burger", price: 200 },
  { name: "Sawrma", price: 600 },
];

function totalAmount(previousPrice, initialPrice) {
  const totalPrice = previousPrice.price + initialPrice.price;
  return { price : totalPrice };
//   pass an object 
}

const foodPrice = orderedFood.reduce(totalAmount);  //* We pass totalAmount function that pass the value.... 
console.log(foodPrice, foodPrice.price); 


