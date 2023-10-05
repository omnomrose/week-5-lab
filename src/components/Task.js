export default function Task(props) {
  const task = props.task;

  function handleDelete() {
    props.remove(task);
  }

  function handleStatusChange() {
    props.toggleComplete(task);
  }

  return (
    <li className="task">
      <div className="task-details">
        <p>
          <span>
            <input
              type="checkbox"
              onChange={handleStatusChange}
              value={task.complete}
            />
            {task.complete === true ? <del>{task.task}</del> : task.task}
          </span>
        </p>
      </div>
      <div onClick={handleDelete}>
        <button className="remove-btn">remove</button>
      </div>
    </li>
  );
}
