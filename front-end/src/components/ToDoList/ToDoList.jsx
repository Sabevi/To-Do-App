import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./ToDoList.css";

const ToDoList = ({ toggleCompletedTask, removeTask, data }) => {
  
  return(
    <table>
      <tbody>
        {data.map((task,index) =>(
          <tr key={index}>
            <td>
              <label 
                htmlFor={`task ${index + 1}`} 
                className={task.done ? "task-undelined" : ""}
              >
              <input 
                id={`task ${index + 1}`}
                type="checkbox"
                onChange={() => toggleCompletedTask(index)}
              />
                {task.task}
              </label>
              <button className="delete-task"onClick={() => removeTask(index)}>
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

ToDoList.propTypes = {
  data: PropTypes.arrayOf((PropTypes.shape({
    task: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }))).isRequired,
  toggleCompletedTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired
};

export default ToDoList;