import React from "react";
import useDeleteTask from "../../hooks/useDeleteTask";
import useModifyTask from "../../hooks/useModifyTask";
import { Data, Response } from "../../config/models";
import "./ToDoList.css";

interface Props {
  data: Data[];
  setData: React.Dispatch<React.SetStateAction<Data[]>>;
  taskList: Data[];
}

const ToDoList = ({ data, setData, taskList }: Props) => {
  const { deleteTask } = useDeleteTask();
  const { modifyTask } = useModifyTask();

  const removeTask = async (index: number) => {
    const response: Response = await deleteTask(data[index]._id);
    setData(data.filter((element: Data) => element._id !== response.task._id));
  };

  const toggleCompletedTask = async (index: number) => {
    const taskObject: Data = data[index];
    taskObject.completed = !taskObject.completed;
    const response: Response = await modifyTask(taskObject, data[index]._id);
    console.log("response", response);
    const newData = [...data];
    newData.map((element: Data) => {
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
                className="button is-rounded is-small action-button"
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

export default ToDoList;
