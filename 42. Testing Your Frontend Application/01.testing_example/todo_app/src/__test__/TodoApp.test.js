//* 1. Import required library 
import React from "react"; 
import {render, fireEvent} from "@testing-library/react";
// This was methods in react testing-library 
import TodoApp from "../components/TodoApp";
//* 2. Rendering the component 
test("Renders Todo App Component", () => {
    const {getByText} = render(<TodoApp />); 
    const linkElement = getByText(/Todo App/i);
    expect(linkElement).toBeInTheDocument(); 

})
//* 3. Write test cases 
//* 4. Simulate user Interactions 
test("add a new Todo Item", () => {
    const {getByText , getByPlaceholderText } = render(<TodoApp />); 
    const input = getByPlaceholderText(/Add a new Todo/i);
    const button = getByText(/Add Todo/i);

    fireEvent.change(input, {target : {value : 'Learn JEST'}});
    fireEvent.click(button); 

    const newTodo = getByText(/Learn JEST/i);
    expect(newTodo).toBeInTheDocument()
}); 

//* Testing a Toggling Todo Item 

test("toggles todo item", () => {
    const {getByText , getByPlaceholderText } = render(<TodoApp/>); 
     const input = getByPlaceholderText(/Add a new Todo/i);
    const button = getByText(/Add Todo/i);
     fireEvent.change(input, {target : {value : 'Learn JEST'}});
    fireEvent.click(button); 

     const newTodo = getByText(/Learn JEST/i);
     fireEvent.click(newTodo);
    expect(newTodo).toHaveStyle("text-decoration : line-through");

})