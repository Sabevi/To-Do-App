import React from "react";
import PropTypes from "prop-types";
import TaskItem from "../../components/TaskItem/TaskItem";
import "./ToDoList.css";

const ToDoList = ({ taskList, toggleCompletedTask, removeTask }) => {
  return (
    <table>
      <tbody>
        {taskList.map((task, index) => (
          <tr key={index}>
            <td>
              <TaskItem
                task={task}
                index={index}
                toggleCompletedTask={toggleCompletedTask}
                removeTask={removeTask}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

ToDoList.propTypes = {
  taskList: PropTypes.array.isRequired,
  toggleCompletedTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired
};

export default ToDoList;
