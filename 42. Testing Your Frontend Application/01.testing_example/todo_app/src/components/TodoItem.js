function TodoItem({todos, toggleTodo}) {
    return <li style={{textDecoration : todos.completed ? 'line-through' : "none"}} onClick={() => toggleTodo(todos.id)}>
       {todos.text}
    </li>
}

export default TodoItem;