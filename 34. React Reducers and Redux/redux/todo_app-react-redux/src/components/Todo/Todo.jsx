import { useState } from "react";

function Todo({ todoData, isFinished, id, changeFinished, onDelete, onUpdate }) {
    const [finished, setFinished] = useState(isFinished);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todoData);

  return (
    <div style={{ margin: "1rem 0" }}>
      <input
        type="checkbox"
        checked={finished} 
        onChange={(e) => {
            setFinished(e.target.checked);
            changeFinished(e.target.checked)}}
        id={id}
      />

    { isEditing ? (<input type="text" value={editText} onChange={(e) => setEditText(e.target.value)}  />) :todoData}

        <button
          onClick={() => {
            setIsEditing(!isEditing);
            onUpdate(editText)
          }}
        >
          {!isEditing ? "Edit" : "Save"}
        </button>
        <button onClick={onDelete}>Delete </button>
    </div>
  );
}

export default Todo;
