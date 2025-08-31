import TodoItem from "./TodoItem";

function TodoList({todos, toggleTodo}) {
    return <ul>
        {todos.map((todo) => {
            return  <TodoItem key={todo.id} todos={todo} toggleTodo={toggleTodo} />
        })}
    </ul>
}

export default TodoList; 