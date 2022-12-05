import React from "react";
import PropTypes from "prop-types";
import "./ToDoList.css";

const ToDoList = ({ toggleCompletedTask, removeTask, taskList }) => {
  return (
    <table>
      <tbody>
        {taskList.map((task, index) => (
          <tr key={index}>
            <td>
              <div className="checkbox-container">
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
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

ToDoList.propTypes = {
  taskList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  toggleCompletedTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
};

export default ToDoList;
