import React, { useState, useEffect } from "react";
import AddTask from "../../components/AddTask/AddTask";
import SelectTask from "../../components/SelectTask/SelectTask";
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
  const [selectCategory, setSelectedCategory] = useState("");
  const { sendTask } = useSendTask();
  const { deleteTask } = useDeleteTask();
  const { modifyTask } = useModifyTask();

  useEffect(() => {
    setTaskList(data);
  }, [data]);

  useEffect(() => {
    if (selectCategory === "todo") {
      setTaskList(data.filter((element) => !element.completed));
    } else if (selectCategory === "done") {
      setTaskList(data.filter((element) => element.completed));
    } else if (selectCategory === "all") {
      setTaskList(data);
    }
  }, [selectCategory]);

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
      setData((oldData) => [...oldData, response.todo]);
      setName("");
      document.querySelector("form").reset();
    }
  };

  const removeTask = async (index) => {
    const response = await deleteTask(data[index]._id);
    setData(data.filter((element) => element._id !== response.todo._id));
  };

  const toggleCompletedTask = async (index) => {
    const taskObject = data[index];
    taskObject.completed = !taskObject.completed;
    const response = await modifyTask(taskObject, data[index]._id);
    const newData = [...data];
    newData.map((element) => {
      return response.todo._id === element._id ? response.todo : element;
    })
    setData(newData);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main>
          <div className="todo-container">
            <AddTask 
              updateTaskValue={updateTaskValue}
              addTask={addTask}
            />
            <SelectTask
              updateSelectedCategoryValue={updateSelectedCategoryValue}
            />
            <ToDoList
              toggleCompletedTask={toggleCompletedTask}
              removeTask={removeTask}
              taskList={taskList}
            />
          </div>
        </main>
      )}
    </>
  );
};

export default ToDo;
