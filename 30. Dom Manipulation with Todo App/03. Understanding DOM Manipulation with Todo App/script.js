
function fetchTodos() {
  const todos = JSON.parse(localStorage.getItem("todos")) || { todoList: [] };
  return todos;
}

function refreshTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodoToLocalStorage(todo) {
  const loadTodos = fetchTodos();

  loadTodos.todoList.push({ ...todo, id: loadTodos.todoList.length });
  localStorage.setItem("todos", JSON.stringify(loadTodos));
}

function appendTodoInHTML(todo) {
  const taskList = document.getElementById("taskList");
  const wrapperTodo = document.createElement("div");
  const todoItem = document.createElement("li");

  todoItem.setAttribute("data-id", todo.id);

  wrapperTodo.textContent = todo.text;
  todoItem.classList.add("todoItem");

  const wrapperDiv = document.createElement("div");

  if (todo.isCompleted) {
    wrapperTodo.classList.add("completed");
  }
  wrapperDiv.classList.add("todoButtons");
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");
  editBtn.addEventListener("click", editTodo);
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", deleteTodo);
  const completedBtn = document.createElement("button");
  completedBtn.textContent = todo.isCompleted ? "Reset" : "Completed";
  completedBtn.classList.add("completed-btn");
  completedBtn.addEventListener("click", completeTodo);

  wrapperDiv.appendChild(editBtn);
  wrapperDiv.appendChild(completedBtn);
  wrapperDiv.appendChild(deleteBtn);
  todoItem.appendChild(wrapperTodo);
  todoItem.appendChild(wrapperDiv);

  taskList.appendChild(todoItem);
}



function executeFilterAction(event) {
  const taskList = document.getElementById("taskList");
  const element = event.target;
  const value = element.getAttribute("data-filter");
  taskList.innerHTML = "";
  const todos = fetchTodos();

  if (value === "all") {
    todos.todoList.forEach((todo) => {
      appendTodoInHTML(todo);
    });
  } else if (value === "pending") {
    todos.todoList.forEach((todo) => {
      if (todo.isCompleted !== true) {
        appendTodoInHTML(todo);
      }
    });
  } else {
    todos.todoList.forEach((todo) => {
      if (todo.isCompleted === true) {
        appendTodoInHTML(todo);
      }
    });
  }
}

function refreshHTMLTodo(todos) {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  todos.todoList.forEach((todo) => {
    appendTodoInHTML(todo);
  });
}

function completeTodo(event) {
  const element = event.target.parentElement.parentElement; //? Accessing the parentElement with target object.
  const todoId = element.getAttribute("data-id");
  const todos = fetchTodos();

  todos.todoList.forEach((todo) => {
    if (todo.id === parseInt(todoId)) {
      todo.isCompleted = !todo.isCompleted;
    }
  });
  refreshTodos(todos);
  refreshHTMLTodo(todos);
}

function deleteTodo(event) {
  const element = event.target.parentElement.parentElement;
  //? Accessing the parentElement with target object
  const todoId = element.getAttribute("data-id");

  let todos = fetchTodos();

  todos.todoList = todos.todoList.filter(
    (todo) => todo.id !== parseInt(todoId)
  );
  refreshTodos(todos);
  refreshHTMLTodo(todos);
}

function editTodo(event) {
  const element = event.target.parentElement.parentElement; //? Accessing the parentElement with target object.
  const todoId = element.getAttribute("data-id");
  let todos = fetchTodos();
  const response = prompt("What is the new todo value you want to set ?");
  todos.todoList.forEach((todo) => {
    if (todo.id === parseInt(todoId)) {
      todo.text = response;
    }
  });

  refreshTodos(todos);
  refreshHTMLTodo(todos);
}

function addNewTodo() {
    const todoInput = document.getElementById("todoInput");
  const todoText = todoInput.value.trim();
  if (todoText === "") {
    alert("Please write something for todo");
  } else {
     const todos = fetchTodos(); 
    addTodoToLocalStorage({
      text: todoText,
      isCompleted: false,
      id: todos.todoList.length,
    });
    appendTodoInHTML({
      text: todoText,
      isCompleted: false,
      id: todos.todoList.length,
    });
    todoInput.value = "";
  }
}


document.addEventListener("DOMContentLoaded", function eventHandler() {
  const todoInput = document.getElementById("todoInput");
  const submitBtn = document.getElementById("addTodo");
  const taskList = document.getElementById("taskList");
  const todos = fetchTodos();
  const filterBtn = document.getElementsByClassName("filterBtn");

  for (btn of filterBtn) {
    btn.addEventListener("click", executeFilterAction);
  }

  submitBtn.addEventListener("click", addNewTodo);

  todoInput.addEventListener("change", function onChangeHandler(event) {
    const todoText = event.target.value.trim();
  });
  todos.todoList.forEach((todo) => {
    appendTodoInHTML(todo);
  });

  document.addEventListener("keypress", (e) => {
    if (e.code == "Enter") { 
        addNewTodo();
    }
  });
});
