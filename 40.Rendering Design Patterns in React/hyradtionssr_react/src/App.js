import React, { useEffect, useState } from "react";

function App({ initialTask }) {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(initialTask || []);

  function addTodo(event) {
    if (task) {
      setTasks([...tasks, { id: task.length + 1, title: task }]);
      setTask("");
    }
  }

  useEffect(() => {
    setTasks(initialTask);
  }, [initialTask]);

  return (
    <>
      <h1>Todo Application</h1>
      <input
        type="text"
        value={task}
        placeholder="Add a Task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTodo}>Add Task</button>
      <ul>
        {tasks &&
          tasks.map((task) => {
            return <li key={task.id}>{task.title}</li>;
          })}
      </ul>
    </>
  );
}

export default App;
