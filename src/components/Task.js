import React from "react";

function Task({ task, text, category, deleteTask }) {
  const taskText = text || (task && task.text);
  const taskCategory = category || (task && task.category);

  return (
    <div className="task">
      <div className="label">{taskCategory}</div>
      <div className="text">{taskText}</div>
      <button 
        className="delete" 
        onClick={() => deleteTask && deleteTask(taskText)}
      >
        X
      </button>
    </div>
  );
}

export default Task;