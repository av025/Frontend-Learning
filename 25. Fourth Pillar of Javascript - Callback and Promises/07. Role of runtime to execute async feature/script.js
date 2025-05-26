//! Role of Runtime to execute async feature in javascript 
/* 
JavaScript by itself (as defined by the ECMAScript specification) is not powerful enough to handle all tasks such as:

    - Asynchronous operations (like timers or HTTP requests)
    - Manipulating HTML elements
    - Changing CSS styles
    - Handling user interactions

This is because core JavaScript only handles logic and computations. It does not have built-in capabilities to interact directly with the browser or the operating system.

This is where the JavaScript Runtime Environment comes into play.

In a web browser, JavaScript runs inside the browser's JavaScript engine (such as V8 in Chrome or SpiderMonkey in Firefox). The browser provides additional features and APIs such as:

    - setTimeout, setInterval (for timing)
    - document, window, location (for DOM and browser objects)
    - fetch, XMLHttpRequest (for HTTP requests)
    - addEventListener (for event handling)

These features are not part of core JavaScript but are made available by the browser's runtime environment.

For example:
    - The setTimeout function is not defined in the ECMAScript specification.
    - It is provided by the browser.
    - The timer value is also handled by the browser.

JavaScript is no longer limited to browsers. With the help of runtime environments like:

    - Node.js
    - Deno
    - Bun

We can now use JavaScript outside the browser to build backend/server-side applications. These environments provide their own APIs for file systems, networking, database access, and more.

In summary:
Core JavaScript (ECMAScript) is limited in functionality.
The runtime environment (whether in a browser or server-side platform like Node.js) provides the necessary tools to make JavaScript capable of handling real-world tasks.
*/
