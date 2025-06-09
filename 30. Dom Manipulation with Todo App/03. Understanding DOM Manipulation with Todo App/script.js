function loadTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || { todoList : [] }; 
    return todos; 

}; 

function addTodoToLocalStorage(todoText) { 
  const fetchTodos = loadTodos(); 
  fetchTodos.todoList.push(todoText); 
  localStorage.setItem("todos", JSON.stringify(fetchTodos));
//* Actually when we seting todos from this setItem than it convert our object into String so it become [object Object]
};

function appendTodoInHtml(todoText) { 
    const todoList = document.getElementById("todoList"); 
    const todoItem = document.createElement("li"); 
    todoItem.textContent = todoText; 
    todoItem.classList.add("todoItem");
    // Create Edit Button 
    const editBtn = document.createElement("button"); 
    editBtn.textContent = "Edit";
    editBtn.classList.add("editBtn");
    
    // Create Delete Button 
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn"); 

    //  Completed Button 
    const completedBtn = document.createElement("button");
    completedBtn.textContent = "Completed";
    completedBtn.classList.add("completedBtn");
    
    todoItem.appendChild(editBtn);
    todoItem.appendChild(completedBtn);
    todoItem.appendChild(deleteBtn);
    todoList.appendChild(todoItem); 
}

document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("input-todo"); 
    const submitBtn = document.getElementById("todoButton");  

    // submitBtn 
    submitBtn.addEventListener("click", (event) => { 
       const todoText = todoInput.value; 
       if(todoText === "") {
           alert("Please write something for the todo");
       }else {
           addTodoToLocalStorage(todoText); 
           appendTodoInHtml(todoText); 
           todoInput.value = ""
       }
    });

    // todoInput
    todoInput.addEventListener("change", (event) => {  
        const todoText = event.target.value.trim();
    }); 

    const todos = loadTodos();

    todos.todoList.forEach(todo => {
       const newTodoItem = document.createElement("li");  
       newTodoItem.textContent = todo; 
       todoList.appendChild(newTodoItem);
    });

}); 



