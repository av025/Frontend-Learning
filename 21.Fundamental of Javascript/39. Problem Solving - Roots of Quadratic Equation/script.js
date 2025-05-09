//! Problem Solving - Roots of Quadratic Equations

//* Given the 3no. a, b, and c, which was represent the coefficient of a quadratic equation ax2 + bx + c. Find the roots of the quadratic equation
//! Assume real root b2 = 4ac

function solve(a, b, c) {
  //* ax^2 + bx + c
  const sqrtValue = Math.sqrt(b * b - 4 * a * c);

  const rootOne = (-b + sqrtValue) / (2 * a);
  const rootTwo = (-b - sqrtValue) / (2 * a);

  console.log(rootOne, rootTwo);
}
 
solve(2, 5 , 3);