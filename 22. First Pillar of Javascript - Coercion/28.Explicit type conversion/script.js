//! Explicit type conversion

//* To understand Explicit type conversion let see some unwanted coercion condition 
// Example One 
console.log( 1 < 2 < 3 ); //* Output : true 
//? Here coercion was occur let see how js evaluate this expression   (1 < 2) = true --> true < 3 "So here true was converted in number type which was 1" ---> 1 < 3 ----> true so that's the final output of the above expression. 
//  Example Two 
console.log( 3 > 2 > 1) //* Output : false 
//? Here coercion was occur like this 3 > 2 ---> true than true > 1 now this true was convert in number type and give 1 ---> 1 > 1 ---> output false  

//* For this like cases or more we have explicit conversion method also  

const myValue = 12; 

//? If we want to convert into boolean type than we used Boolean() method 
console.log(Boolean(myValue)); // Output : true 
//? If we want to convert into string type than we use String() method 
console.log(String(myValue)); // Output : 12 and it's type string 
//! This typeof operator always return string output 