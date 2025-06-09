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
       }
    });

    // todoInput
    todoInput.addEventListener("change", (event) => {  
        const todoText = event.target.value.trim();
    }); 

    

    loadTodos();

}); 



