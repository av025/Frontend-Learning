//! Playing with Closures 
//* Let see and understand more about closures 

function process() {
    let i = 0; 
    let j = [1,2,3];
    let k = 20; 

    function innerProcess() {
        //* It saved mainly to this i and j lexical scope variable in our memory because we are accessing this two parent variable only. 
        i += 1; 
        console.log(j);
        return i; 
    }; 

    return innerProcess();
}; 


const result = process(); 

const object = { func: result}; 

console.log(object);




