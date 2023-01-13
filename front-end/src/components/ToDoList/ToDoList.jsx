import React from "react";
import PropTypes from "prop-types";
import useDeleteTask from "../../hooks/useDeleteTask";
import useModifyTask from "../../hooks/useModifyTask";
import "./ToDoList.css";

const ToDoList = ({ data, setData, taskList }) => {

  const { deleteTask } = useDeleteTask();
  const { modifyTask } = useModifyTask();

  const removeTask = async (index) => {
    const response = await deleteTask(data[index]._id);
    setData(data.filter((element) => element._id !== response.task._id));
  };

  const toggleCompletedTask = async (index) => {
    const taskObject = data[index];
    taskObject.completed = !taskObject.completed;
    const response = await modifyTask(taskObject, data[index]._id);
    const newData = [...data];
    newData.map((element) => {
      return response.task._id === element._id ? response.task : element;
    })
    setData(newData);
  };

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
