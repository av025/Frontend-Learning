import { memo } from "react";
function TodoItem({ todo, onDelete }) {
  return (
    <>
      <li>
        {todo.value}
        <button style={{margin: "10px"}}  onClick={ () => onDelete(todo.value)}>Delete Todo</button>
      </li>
    </>
  );
}

export default memo(TodoItem);
//? Here we using memo() function which was higher order component which return memoised react component.
