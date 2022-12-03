import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import "./ToDoList.css";

const ToDoList = ({ taskList, toggleCompletedTask, removeTask }) => {
  
  return(
    <table>
      <tbody>
        {taskList.map((task,index) =>(
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
              <button className="delete-task" onClick={() => removeTask(index)}>
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ToDoList;