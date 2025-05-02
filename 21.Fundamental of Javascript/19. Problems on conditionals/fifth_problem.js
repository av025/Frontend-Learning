//! Problem Solving - Is a Valid Triangle 
//* Given the side of length of a triangle in the form of 3 integers is equilateral or scalene or isosceles triangle 

//? Condition one :- 
let firstSide = 7; 
let secondSide = 7; 
let thirdSide = 7; 

//? Condition two :- 
firstSide = 8;
secondSide = 12;
thirdSide = 5;  

//? Condition three :- 
firstSide = 4; 
secondSide = 8; 
thirdSide = 8; 

if( firstSide === secondSide && secondSide === thirdSide && thirdSide === firstSide) {
    console.log("Equilateral Triangle ") 
    //! This statement execute when all three sides are equal to each other in condition one 
} else if(firstSide !== secondSide && secondSide !== thirdSide && firstSide !== thirdSide) {
    console.log("Scalene Triangle"); 
    //! This statement execute when all three sides are not equal to each other in condition two 
} else if (firstSide === secondSide || secondSide === thirdSide || firstSide === thirdSide) {
    console.log("Isosceles Triangle")
    //! This statement execute when only two sides to each other but third side was different in condition three 
}