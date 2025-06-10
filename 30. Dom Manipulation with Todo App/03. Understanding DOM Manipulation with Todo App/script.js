function loadTodos() {
  const todos = JSON.parse(localStorage.getItem("todos")) || { todoList: [] };
  console.log(todos);
  return todos;
}; 

function refreshTodo(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
};

function resetHTMLTodo(todos) {
  const todoList = document.getElementById("todoList");
    todoList.innerHTML = "";
    todos.todoList.forEach(todo => {
        appendTodoInHtml(todo);
    });
}

function addTodoToLocalStorage(todo) {
  const fetchTodos = loadTodos();
  fetchTodos.todoList.push({ ...todo, id: fetchTodos.todoList.length });
  localStorage.setItem("todos", JSON.stringify(fetchTodos));
  // * Actually when we seting todos from this setItem than it convert our object into String so it become [object Object]
}; 

function executeFilterAction(event) {
  const element = event.target;
  const value = element.getAttribute("data-filter");
  const todos = loadTodos();
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";

  if (value === "all") {
    todos.todoList.forEach((todo) => {
      appendTodoInHtml(todo);
    });
    todoList.value = "";
  } else if (value === "pending") {
    todos.todoList.forEach((todo) => {
      if (todo.isCompleted !== true) {
        appendTodoInHtml(todo);
      }
    });
  } else {
    todos.todoList.forEach((todo) => {
      if (todo.isCompleted === true) {
        appendTodoInHtml(todo);
      }
    });
  }
};

function completedTodo(event) {
    const todoItem = event.target.parentElement.parentElement; 
    const todoId = todoItem.getAttribute("data-id"); 
    const todos =  loadTodos();
    todos.todoList.forEach(todo => {
        if(todo.id === Number(todoId)) {
            todo.isCompleted = !todo.isCompleted;
        }
    });
    refreshTodo(todos);
    resetHTMLTodo(todos);
   
}; 

function deleteTodo(event) {
    const todoItem = event.target.parentElement.parentElement; 
    const todoId = todoItem.getAttribute("data-id"); 
    let todos = loadTodos(); 
  todos.todoList = todos.todoList.filter(todo => todo.id != todoId);
    refreshTodo(todos); 
    resetHTMLTodo(todos);
};

function appendTodoInHtml(todo) {
  const todoList = document.getElementById("todoList");
  const todoItem = document.createElement("li");

  todoItem.setAttribute("data-id", todo.id);

  const textDiv = document.createElement("div");
  textDiv.textContent = todo.text;

  const wrapper = document.createElement("div");

 if(todo.isCompleted) {
    textDiv.classList.add("completed");
 }

  wrapper.classList.add("todoButtons");

  todoItem.classList.add("todoItem");

  // Create Edit Button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("editBtn");

  // Create Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.addEventListener("click", deleteTodo);

  // Completed Button
  const completedBtn = document.createElement("button");
  completedBtn.textContent = todo.isCompleted ? "Reset" : "Completed";
  completedBtn.classList.add("completeBtn");
  completedBtn.addEventListener("click", completedTodo);

  wrapper.appendChild(editBtn);
  wrapper.appendChild(completedBtn);
  wrapper.appendChild(deleteBtn);
  todoItem.appendChild(textDiv);
  todoItem.appendChild(wrapper);
  todoList.appendChild(todoItem);
};

document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("input-todo");
  const submitBtn = document.getElementById("todoButton");

  let todos = loadTodos();

  const todoList = document.getElementById("todoList");
  const filterBtns = document.getElementsByClassName("filterBtn");
  

  for (const btn of filterBtns) {
    btn.addEventListener("click", executeFilterAction);
  }; 

  // submitBtn
  submitBtn.addEventListener("click", (event) => {
    const todoText = todoInput.value;
    if (todoText === "") {
      alert("Please write something for the todo");
    } else {
      todos = loadTodos();
      const todoObject = {
        text: todoText,
        isCompleted: false,
        id: todos.todoList.length,
      };
      addTodoToLocalStorage(todoObject);
      appendTodoInHtml(todoObject);
      todoInput.value = "";
    }
  });

  // todoInput
  todos.todoList.forEach(todo => {
    appendTodoInHtml(todo);
  });

});
