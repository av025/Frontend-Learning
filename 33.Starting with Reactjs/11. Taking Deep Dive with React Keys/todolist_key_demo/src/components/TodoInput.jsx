import { useState } from "react";
import Sample from "./Sample";

function TodoInput({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  function onFormSubmit(event) {
    event.preventDefault();
    onSubmit?.(inputValue);
    setInputValue("");
  }

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Add your todos here... "
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <button>Add Todo</button>
      </form>
      <Sample key={Math.floor(Math.random() * 10)} />
    </>
  );
}

export default TodoInput;
