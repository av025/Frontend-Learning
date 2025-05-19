//! Coercion with Templated String ? 

//* With example we understand how coercion work with template string 

//? We create template string with the help of back ticks `My String ` and we create dynamic string with the help of this template string because it have string interpolation which add our variable and apply coercion and concatenate with our string template 

const myObject = {x:10 , y:10 }
console.log(`My String was ${myObject}`) //* Output : My String was [object Object]
//! With the help of String interpoliation we can add our variables and create string dynamic we use dollar-sign "$" and curly braces "{ }" to do this.....  

const myValue = 10; 
console.log(`I have ${myValue} Ruppees in my pocket`);
