# Lesson Two: Introduction to DOM Manipulation - BOM

In **Lesson One**, we learned how the browser creates the **DOM** and **CSSOM**, and how HTML elements are finally rendered on the screen. But apart from these, the browser also provides a hidden set of features known as the **BOM**, which stands for **Browser Object Model**.


## What is BOM (Browser Object Model)?

The **Browser Object Model (BOM)** represents the browser’s own features and capabilities, just like the **DOM** represents the structure of an HTML document. 

Just as we access and manipulate HTML elements through the DOM, similarly, we can interact with and control browser-level features using the BOM. This includes things like the browser window, the navigation history, the screen size, and even the URL bar — all of which can be accessed and modified using JavaScript.

The BOM is **not a part of the HTML specification** — it’s provided by the browser itself as part of the **JavaScript runtime environment** in the browser.


## Features Provided by BOM

The BOM allows us to access and manipulate several browser-level features using JavaScript. Some of the most commonly used BOM features include:

1. **Window Object** – Represents the browser window and acts as the global object in browser environments.
2. **Navigator Object** – Provides information about the browser (e.g., name, version, user agent).
3. **Screen Object** – Gives details about the user's screen resolution and dimensions.
4. **History Object** – Lets you interact with the browser’s session history (back, forward, go).
5. **Location Object** – Represents the URL of the current page and allows redirection.
6. **Console Object** – Used for debugging (e.g., `console.log()`), though not a part of JavaScript core.

These are all part of the browser's runtime environment and can be accessed through the `window` object.

## Is the Browser a Runtime Environment for JavaScript?

Yes. In the early days, **JavaScript was designed to run inside the browser only**, so the browser acted as the runtime environment for executing JavaScript code.

To support this execution, the browser provides additional built-in features like:

- `setTimeout`, `setInterval`
- `console.log`, `console.error`, etc.
- `alert`, `prompt`, `confirm`
- `window`, `document`, `navigator`, `location`, and more

These features **are not a part of the core JavaScript language** defined by ECMAScript. They are provided by the browser as part of its **runtime environment**.

Other environments like **Node.js**, **Deno**, and **Bun** also provide a runtime for JavaScript execution — but they come with their own set of features (like file system, server APIs, etc.) instead of browser-specific ones.

## Window Object as the Global Scope

In the browser, the `window` object is the **global scope**. This means any variable or function declared globally becomes a property of the `window` object.

You can try this in the browser console:

```javascript
window;
// This will display all the properties and methods provided by the window object
