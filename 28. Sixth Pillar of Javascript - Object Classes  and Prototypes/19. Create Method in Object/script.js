//! Object.create() Method in JavaScript
//* Let’s understand the difference between referencing and creating a new object using Object.create()

// Original object
const obj = {
    x: 1,
    y: 20
};

// Assign obj to anotherObj — this creates a reference, not a new object
const anotherObj = obj;

//? anotherObj is just a reference to obj, so changes in anotherObj affect obj as well
anotherObj.x = 100;

console.log("obj", obj, "anotherObj", anotherObj);
// Output: obj { x: 100, y: 20 }  anotherObj { x: 100, y: 20 }
//* Changes in anotherObj reflect in obj because both point to the same object

//* Now, let’s use Object.create() to create a new object based on obj

const newObject = Object.create(obj);  // newObject uses obj as prototype

console.log(newObject); // Output: {} (looks empty, but inherits from obj)

//* Add properties to newObject
newObject.x = 101;
newObject.y = 102;

console.log("newObject", newObject, "obj", obj);
// Output: newObject { x: 101, y: 102 }  obj { x: 100, y: 20 }
//* Now both objects are separate. Changes to newObject do not affect obj

//! Conclusion:
//* - Assigning an object directly (obj → anotherObj) creates a reference.
//* - Using Object.create() creates a new object that inherits from the existing one but doesn’t affect the original.
//* - Object.create() is useful when you want to create a new object without using object literals and without modifying the source object.
