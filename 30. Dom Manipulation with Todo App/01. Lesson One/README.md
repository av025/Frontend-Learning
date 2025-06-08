# Lesson One - Introduction to DOM Manipulation

We see on websites that there are buttons—when we click on them, a dialog box opens or the page navigates to another section. On websites, we also interact with our keyboard, like when filling out a form. In some websites, we see beautiful and interactive animations. All of this is possible because of JavaScript manipulating the DOM.

JavaScript was created by Brendan Eich with the specific purpose of enabling interactions in the browser—such as manipulating web page content dynamically, handling events, and creating responsive experiences. DOM manipulation is one of the key reasons JavaScript was born.

---

## What is DOM?

When we create HTML tags and render them in the browser, the browser processes those tags and converts them into HTML elements. These elements are then structured in a tree-like data structure, which is hierarchical in nature. This structure is called the **Document Object Model (DOM)**, and its elements are called **DOM nodes**.

### HTML Document Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>HTML Document</title>
  </head>
  <body>
    <h1>Some Content</h1>
    <p>Some Content</p>
    <div>Some Content</div>
    <div>
      <div><span>Some Content</span></div>
    </div>
  </body>
</html>
```

### Corresponding DOM Tree Structure

```
                             DOM TREE

                             HTML (Root Node)
                               |
            ___________________|____________________
           |                                       |
         Head                                    Body
       ___|___                                     |
      |       |                    _________________________________
    meta    title                 |           |         |           |
 charset   "HTML Document"       h1           p        div         div
                                  |           |         |           |
                               Content     Content    Content       div
                                                                    |
                                                                   span
                                                                    |
                                                                 Content
```

### How is the DOM Tree Created?

This DOM tree is not created directly. It is built through multiple phases:

1. **Characters**: The HTML is read as raw bytes and then converted into characters.
2. **Tokenization**: These characters are broken into tokens representing individual elements and their attributes.
3. **Nodes**: Tokens are converted into nodes.
4. **DOM**: These nodes are then connected into the DOM tree structure.

```txt
Characters
   ↓
Tokenization
   ↓
 Nodes
   ↓
  DOM
```

The DOM tree represents the structure (or skeleton) of the webpage.

---

## What is CSSOM?

Just like the DOM represents the structure of the HTML, the **CSSOM (CSS Object Model)** represents the structure of the CSS. When a web page is loaded, the browser not only parses the HTML to build the DOM, but also parses the CSS to build the CSSOM.

CSSOM is also a tree-like structure where each node represents a CSS rule. These CSS rules are applied to the DOM elements when rendering the final visual output on the screen.

### Giving CSS Properties to HTML Elements

```css
body {
  background-color: lightblue;
}

h1 {
  color: navy;
  margin-left: 20px;
}

p {
  font-size: 14px;
  color: gray;
}
```

### Corresponding CSSOM Tree Structure

```
                         CSSOM TREE

                          Stylesheet (Root)
                                  |
             _____________________|______________________
            |                     |                  |
          body                   h1                  p
     background-color       color: navy       font-size: 14px
     : lightblue            margin-left:      20px
                           color: gray
```

### How is the CSSOM Created?

1. **CSS Text:** The browser reads CSS as raw text.
2. **Tokenization:** CSS text is broken into tokens representing selectors, properties, and values.
3. **Rules:** Tokens are parsed into CSS rules.
4. **CSSOM Tree:** Rules are structured into the CSSOM tree, representing how styles apply to elements.

```txt
CSS Text
   ↓
Tokenization
   ↓
   Rules
   ↓
 CSSOM Tree
```

---

## Building the Render Tree

The DOM and CSSOM are not the final output of the browser. These two trees are combined to form the **Render Tree**. This render tree contains only the visible elements and the styles that will be applied.

```txt
HTML → DOM Tree
CSS  → CSSOM Tree
DOM + CSSOM → Render Tree
```

### What Happens After Render Tree is Created?

1. **Layout (or Reflow):** The browser calculates the exact position and size of each element based on the render tree.
2. **Painting:** The browser converts each node into actual pixels on the screen using styles and layout.

```txt
Render Tree
    ↓
Layout (Reflow)
    ↓
Painting
    ↓
Final Visual Output
```

At this point, we see the actual web page displayed in the browser.

Finally, **JavaScript** can manipulate the DOM after this entire process. When JavaScript changes an element in the DOM (like updating text or style), it may trigger changes in the render tree. This could lead to another layout and paint process, making the page interactive and dynamic.

So, using JavaScript to manipulate the DOM also means we are indirectly affecting how things are displayed on the screen!



