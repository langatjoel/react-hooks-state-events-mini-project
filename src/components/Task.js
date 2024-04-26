// Task.js
import React from "react";

function Task({ task, onDelete }) {
  const { text, category } = task;

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div className="task">
      <div>
        <span className="task-text">{text}</span> -{" "}
        <span className="task-category">{category}</span>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;
