//! typeof operator and type of null special case 

//? typeof operator 
//* With the help of typeof operator we can find type of any value or variable let see example of it 
let variableOne = 1; 
let variableTwo = "Aayush"; 

console.log(typeof variableOne); //* output number type 
console.log(typeof variableTwo); //* output string type 

console.log(typeof true); //* output boolean type 
console.log(typeof undefined); //* output was undefined type 
console.log(typeof NaN); //* output was number type 

//! Lets check type of null 
console.log(typeof null);  //* Here output was object 
//! Bymistake or we say historical mistake type of null was object and we see that null was also one type in javascript it's type should be null but it's object and in its updated version we did not rectify or correct because lot of codebase was rely on this condition and if he change that mistake in recent update of javascript it start breaking the code so it does not change its type and with that javascript provide backend compatibility. 
