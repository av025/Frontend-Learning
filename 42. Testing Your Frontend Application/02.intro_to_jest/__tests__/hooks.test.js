//* There are two types of hooks for : 
// 1st. Before each and after each 
// 2nd. Before All and after all  

const mathOperations = require("../calculator");

//* Assume that there was very big and heavy test files 
//! If we want to write some method which was executed before the every test and every time was run than we are using "Before each hook" and similarly after each was executed every time when test cases are executed completely than this after each was executed. 

//! Before All was also statement or hook which execute once before all the test cases was executed and simlarly for after all also it was excuted only once after all the test cases was executed. 


describe("Calculator", () => {
 var inputOne = 0; 
 var inputTwo = 0; 

 //* beforeAll hook 
 beforeAll(() => {
    console.log("beforeAll Called")
 }); 

 afterAll(() => {
    console.log("afterAll Called")
 }); 

 beforeEach(() => {
    console.log("Calling beforeEach"); 
    inputOne = 1;
    inputTwo = 2; 
 }); 

 afterEach(() => {
    console.log("Calling afterEach")
 }); 

 test(("add test"), () => {
    let value = mathOperations.sum(inputOne, inputTwo); 
    expect(value).toBe(3);
 })

  test(("difference test"), () => {
    let value = mathOperations.difference(inputOne, inputTwo); 
    expect(value).toBe(-1);
 })
}); 

