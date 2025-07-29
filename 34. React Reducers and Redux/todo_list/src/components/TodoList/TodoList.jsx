import { useContext, useState } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext.js";
import TodoDispatchContext from "../../context/TodoDispatchContext.js";

function TodoList() {
  const { list } = useContext(TodoContext);
  const { dispatch } = useContext(TodoDispatchContext);

  function onFinished(todoItem, isFinished) {
    dispatch({ type: "finished_todo", payload: { todoItem, isFinished : isFinished } });
  }

  function onDelete(todoItem) {
    dispatch({ type: "delete_todo", payload: { todoItem } });
  }

  function onEdit(todoItem, todoText) {
    dispatch({ type: "edit_todo", payload: { todoItem, todoText } });
  }

  return (
    <>
      <div>
        {list.length > 0 &&
          list.map((todoItem) => (
            <Todo
              key={todoItem.id}
              id={todoItem.id}
              isFinished={todoItem.isFinished}
              todoData={todoItem.todoData}
              changeFinished={() => onFinished(todoItem, todoItem.isFinished)}
              onDelete={() => {
                onDelete(todoItem);
              }}
              onEdit={(todoText) => {
                onEdit(todoItem, todoText);
              }}
            />
          ))}
      </div>
    </>
  );
}

export default TodoList;
