//! Let move one level ahead in Iterators 

//* Lets create iterator on string 
const myName = "Aayush"; 

function createIterator() {
    let idx = 0; 

    return {
        next: function() {
            if(idx < myName.length) {
                return {value: myName[idx++], done:false}
            }else {
                return {value: undefined , done:true}
            }
        }
    };
};


const stringIterator = createIterator(); 
console.log(stringIterator);

console.log(stringIterator.next());
console.log(stringIterator.next());
console.log(stringIterator.next());
console.log(stringIterator.next());
console.log(stringIterator.next());
console.log(stringIterator.next());
console.log(stringIterator.next());
