export const linearSearching = function search(arr, x) {
    for(let i = 0; i < arr.length; i++) {

        if(arr[i] === x) return i; 
    } 

    return undefined; 

}; 


 const binarySearching = function search(arr, x) {
    let lo = 0, hi = arr.length - 1; 

    while(lo <= hi) {
        let mid = lo + Math.floor((hi - lo)/ 2); 
        if(arr[mid] === x) return mid; 
        else if(arr[mid] < x) {
            lo = mid + 1; 
        }else {
            hi = mid - 1; 
        }
    }; 

    return undefined;
};  

export default binarySearching; //? Here we export default binarySearching 


// module.exports = {
//     linearSearch : linearSearching,
//     binarySearch : binarySearching,
// }

//* This module.exports was a object only something in codebase we can see this of export also in which we assign key and value pair to it... 

// module.exports.linearSearch = linearSearching; 
// module.exports.binarySearch = binarySearching; 
//? In Key-pair value 

