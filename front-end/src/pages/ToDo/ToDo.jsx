import React, { useState, useEffect } from "react";
import ToDoForm from "../../components/ToDoForm/ToDoForm";
import ToDoList from "../../components/ToDoList/ToDoList";
import useGetTaskList from "../../hooks/useGetTaskList";
import useSendTask from "../../hooks/useSendTask";
import useDeleteTask from "../../hooks/useDeleteTask";
import useModifyTask from "../../hooks/useModifyTask";
import Loading from "../../assets/Loading";
import "./ToDo.css";

const ToDo = () => {
  const { loading, data, setData } = useGetTaskList();
  const [taskList, setTaskList] = useState([]);
  const [name, setName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { sendTask } = useSendTask();
  const { deleteTask } = useDeleteTask();
  const { modifyTask } = useModifyTask();

  useEffect(() => {
    setTaskList(data);
  }, [data]);

  useEffect(() => {
    if (selectedCategory === "todo") {
      setTaskList(data.filter((element) => !element.completed));
    } else if (selectedCategory === "done") {
      setTaskList(data.filter((element) => element.completed));
    } else if (selectedCategory === "all") {
      setTaskList(data);
    }
  }, [selectedCategory]);

  const updateTaskValue = (e) => {
    setName(e.target.value);
  };

  const updateSelectedCategoryValue = (e) => {
    setSelectedCategory(e.target.value);
  };

  const addTask = async (e) => {
    e.preventDefault();

    if (name.length) {
      const response = await sendTask({ name, completed: false });
      setData((oldData) => [...oldData, response.task]);
      setName("");
      document.querySelector("form").reset();
    }
  };

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
    });
    setData(newData);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main>
          <ToDoForm
            updateTaskValue={updateTaskValue} 
            addTask={addTask}
          />
          <div className="select select-task-container">
            <label htmlFor="select-task" className="select-label">
              Display :
            </label>
            <select
              id="select-task"
              onChange={updateSelectedCategoryValue}
            >
              <option value="all">All</option>
              <option value="todo">Only Todo</option>
              <option value="done">Only done</option>
            </select>
          </div>
          <ToDoList
            taskList={taskList}
            toggleCompletedTask={toggleCompletedTask}
            removeTask={removeTask}
          />
        </main>
      )}
    </>
  );
};

export default ToDo;
