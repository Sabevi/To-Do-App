import React from "react";
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
              <button onClick={() => removeTask(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ToDoList;