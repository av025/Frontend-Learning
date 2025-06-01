//! Example of .then() Chaining

//* Let's see another example of how .then() chaining works with asynchronous code

Promise.resolve("foo").then((string) => {
    // First .then() receives the resolved value "foo"
    // Returns a new Promise that resolves after 10 seconds
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            string += "bar"; // Append 'bar' to the original string
            resolve(string); // Resolves with 'foobar'
        }, 10000); // 10-second delay
    });
}).then((string) => {
    // This .then() waits for the above promise to resolve with 'foobar'

    setTimeout(() => {
        string += "baz"; // Append 'baz' after 6 seconds
        console.log(string); // Logs 'foobarbaz' (after 16 seconds total: 10 + 6)
    }, 6000); // Delayed console.log using setTimeout (runs outside the promise chain)

    return string; // Returns 'foobar' immediately (not 'foobarbaz')
}).then((string) => {
    // This .then() receives the value returned from the previous .then() ('foobar')
    console.log("Last then: This ran immediately after the previous .then(), not after the 6s timer.");
    console.log(string); // Logs 'foobar'
});
