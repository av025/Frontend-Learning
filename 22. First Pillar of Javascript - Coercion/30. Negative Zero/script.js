//! Negative Zero in JS 
//* Negative "-0" which was also special case in javascript when we do calculation of vector quantities in which we have direction also magnitude and if the magintude becomes 0 than we have to calculate the direction with the help of this negative zero "-0" only.  

//? This Negative Zero have some problem also let see that : 
const negativeZero = -0; 

//* case 
console.log(negativeZero === -0);  //* Output : true

//* If we compare with 0 in equality operator it give us always true let demonstrate that : 
console.log(negativeZero === 0); // Output : true 
//! It was algorithm wise was correct but how can we identity it was -0 value ???