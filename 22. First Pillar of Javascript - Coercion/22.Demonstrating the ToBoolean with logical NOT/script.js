//! Demonstrating the ToBoolean with logical NOT 
//* Lets understand how logical NOT Operator "!" helps to perform ToBoolean abstract operation implicitly 

function ToBoolean(inputType) {
  console.log(!inputType);  //? Here we perform ToBoolean Abstract operation which do coercion and convert into boolean type 

}; 


//* Below all have the output : true of our falsy value means it convert all our falsy value because we are using NOT Operator and convert all the falsy value into truthy value. 
ToBoolean("");
ToBoolean(null); 
ToBoolean(undefined); 
ToBoolean(0); 
ToBoolean(+0); 
ToBoolean(-0); 
ToBoolean(false); 

