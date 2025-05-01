//! Problem Solving - Is a Valid Triangle 
//* We all know about triangles, but this time do interesting . Given three integers a,b and c  check if we form  a triangle with  sides of triangle having the length of a, b and c. 

let sideA = 7; let sideB = 5; let sideC = 3; 

if(sideA + sideB > sideC && sideB + sideC > sideA && sideC + sideA > sideB) 
    console.log("Triangle Form");
else {
    console.log("Triangle was not form");
} 

//! To Form a Triangle there was formula if the sum of two sides is greater than third side than we form a triangle 