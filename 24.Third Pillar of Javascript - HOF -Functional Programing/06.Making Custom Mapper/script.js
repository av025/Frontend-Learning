//! Making Custom Mapper 
//* let create our own Custom Mapper function 

const myArr = ["Aayush", "Saijal", "Rahul", "Vansh", "Kiran"]; 

//* Print func 
function print(value , index) {
    return `Element ${value} of an array at index of ${index}`; 
}; 

//* Custom Mapper 
function customMapper (arr , callbackFun) {
    let result = []; 
    for(let idx = 0; idx < arr.length; idx++) {
        result.push(print(arr[idx], idx)); 
        //! With the help of push func we can add element in our array and it adds from last. 
    }; 
    console.log(result);
}; 


customMapper(myArr , print);



//! push and pop function in javascript 
//* With the help of push function we can add element in our array at last and with the help of pop function we can remove element from the last. 

const myArray = []; //* Initialize the empty array 

//* Let add element in our array one by one 
myArray.push(1); 
myArray.push(5); 
myArray.push(9); 
myArray.push(13); 
myArray.push(17); 
myArray.push(21);

console.log(myArray);   //* Output : [1, 5, 9, 13, 17, 21]


