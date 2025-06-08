//! Freeze and Seal Methods in JavaScript Objects 
//* Let’s understand the freeze and seal methods of JavaScript with examples

// Example One:
const myObject = {
    x: 10,
    y: 20
};

//? Now, if we don’t want to update the properties of our object, then we use the freeze method of the global Object function
Object.freeze(myObject);  // This freeze method prevents any updates to properties of myObject

//* Let's try to update the 'x' property
myObject.x = 20;

//? Before using freeze()
// console.log(myObject);  // Output: { x: 20, y: 20 }
// Value was updated

console.log(myObject); // Output: { x: 10, y: 20 }
//* We see that we can’t update the existing property when Object.freeze() is used

//* Let's try to add a new property
myObject.z = 100;

console.log(myObject);  // Output: { x: 10, y: 20 }
//* We can’t add new properties either

//! Conclusion for Object.freeze()
//* Once we use Object.freeze(), we can’t update or add new properties to the object


// Example Two:

const myObjectFirst = {
    x: 20,
    y: 30
};

//* If we want to update existing properties but prevent adding new ones, we use Object.seal()

Object.seal(myObjectFirst);

//? Object.seal() behaves like freeze(), but allows updating existing properties

//* Try to add a new property
myObjectFirst.z = 100;

console.log(myObjectFirst);  // Output: { x: 20, y: 30 }
//* New property was not added

//* Try to update existing properties
myObjectFirst.x = 30;
myObjectFirst.y = 20;

console.log(myObjectFirst);  // Output: { x: 30, y: 20 }
//* We can update existing properties

//! Conclusion for Object.seal()
//* Object.seal() allows updating existing properties
//* But it does not allow adding or removing properties
