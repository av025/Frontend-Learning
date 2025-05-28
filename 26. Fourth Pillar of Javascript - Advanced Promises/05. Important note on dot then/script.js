//! Important note on dot then ".then()"

//* Book Data 
const allBook = [
    {id:1, bookName:"Book First", bookAuthor:"Author Of Book"}, 
    {id:2, bookName:"Book Second", bookAuthor:"Author of Book"},
    {id:3, bookName:"Book Third", bookAuthor:"Author of Book"}, 
    {id:4 , bookName:"Book Fourth", bookAuthor:"Author of Book"}
]; 


//* Create Promise 
function getAllBook() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {

            if(allBook.length > 0) {
                resolve({success:true , data:allBook});
            }else {
                reject({success:false , message:"Data not found"});
            }

        }, 6000)
    })
}; 



const response = getAllBook(); 

response.then(function fullfilment(value) {
    console.log("Promise Resolve and value was : ", value); 
}, function rejection(value) {
    console.log("Promis was rejected the value was : ", value)
})

//! This .then handler was used to register this two state handler first was fullFilment handler and second was rejection handler 
//! With the help .then handler we can register this function in getFullfilment array and getRejection array respoectively than the promise state change than this handler function fullFilment and rejection handler execute 
