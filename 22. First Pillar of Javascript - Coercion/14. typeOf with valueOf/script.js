//! typeOf with valueOf 
//* As we know that if we use typeOf operator with valueOf method returns that object in which we are calling 
// let see example : 
const myObject = {
    name: "Aayush Vyas"
}

console.log(myObject.valueOf(), typeof myObject.valueOf()); 
//? Output : {name: 'Aayush Vyas'} object 