import React from "react";
import PropTypes from "prop-types";
import "./TaskItem.css";

const TaskItem = ({ task, index, toggleCompletedTask, removeTask }) => {
  return (
    <>
      <div className="check-task-container">
        <input
          id={`task ${index + 1}`}
          type="checkbox"
          onChange={() => toggleCompletedTask(index)}
        />
        <label
          htmlFor={`task ${index + 1}`}
          className={task.completed ? "task-line" : ""}
        >
          {task.name}
        </label>
      </div>
      <button 
        className="delete-item-button"
        onClick={() => removeTask(index)}
      >
        Delete
      </button>
    </>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  toggleCompletedTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired
};

export default TaskItem;
