import { useState } from "react";
import { nanoid } from "nanoid";

export default function TaskForm(props) {
  const [task, setTask] = useState("");

  function handleTaskChange(e) {
    setTask(e.target.value);
  }

  function handleSubmit(e) {
    // adds a task
    e.preventDefault();
    const newTask = {
      task: task,
      complete: false,
      id: nanoid()
    };
    props.addTask(newTask);
    setTask("");
  }

  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <div className="newTask">
          <label>
            <input
              type="text"
              onChange={handleTaskChange}
              placeholder="Add new task..."
              value={task}
            />
          </label>
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}
