//! Detail about Sort Function 
//* As we know that with the help of sort inbuild func we can sort our array but that sorting in lexiographical sorting means according to dictionary sorting. elements was sorted according to its ASCII value  which was associated let see another time with example : 

const array = [1 ,2, 4, 6, 3, 100 , 99 , 566]; 

const sortedArray = array.sort(); 
console.log(sortedArray);

/** 
 *  When we apply sorting it will apply according to lexiographical sorting or dicitionary associated with it. 
 *  0 -> A 
 *  1 -> B
 *  2 -> C
 *  3 -> D 
 *  4 -> E
 *  5 -> F
 *  6 -> G 
 *  7 -> I 
 *  8 -> J
 *  9 -> K 
 *  10 -> BA 
 * Our array was 
 * [ 1 , 2 ,3 , 4, 6, 100, 99, 566] --> It was sorted like this [ 1:A, 100: BAA, 2:B 3:C, 4:E, 566:FGG,  6:G, 99:KK ]; 
 * SORTED ORDER  : [1, 100, 2, 3, 4, 566, 6,99] 
 */

//? For sorting numericaly we have to pass comparator func so it's sorted in numeric integer value 
//! this array.sort() was also inbuilt HOF Function 
// let understand with the help of applying comparator operator 
const increasingSort =  array.sort(function(a,b) {
    return a - b; 
    //* Here we compare like this a > b 
    //? if a - b < 0 will be negative value than comparator function places the a before b 
    //? if a -b > 0 will be positive value  than comparator function places the b before a 
    //? if a - b is 0 => their order remains unchanged
}); 

console.log(increasingSort); 


const decreasingSort = array.sort(function(a,b) {
    return b - a; 
    //* Here we compare like this b > a 
    //? if b - a < 0 will be negative than comparator function places b before a 
    //? if b - a > 0will be positive than comparator function places a before b 
    //? if b - a is 0 => their order remains unchanged
}); 

console.log(decreasingSort); 