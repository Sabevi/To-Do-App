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
  const { loading, data, refresh } = useGetTaskList();
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");
  const [selectCategory, setSelectedCategory] = useState("");
  const { sendTask } = useSendTask();
  const { deleteTask } = useDeleteTask();
  const { modifyTask } = useModifyTask();

  useEffect(() => {
    setTaskList(data);
  }, [data]);

  useEffect(() => {
    if (selectCategory === "only todo") {
      setTaskList(data);
      const newTaskList = taskList.filter((element) => !element.done);
      setTaskList(newTaskList);
    } else if (selectCategory === "only done") {
      setTaskList(data);
      const newTaskList = taskList.filter((element) => element.done);
      setTaskList(newTaskList);
    } else if (selectCategory === "all") {
      setTaskList(data);
    }
  }, [selectCategory]);

  const updateTaskValue = (e) => {
    setTask(e.target.value);
  };

  const updateSelectedCategoryValue = (e) => {
    setSelectedCategory(e.target.value);
  };

  const addTask = async () => {
    if (task.length) {
      let taskObject = { task, done: false };
      sendTask(taskObject);
      refresh();
      setTask("");
    }
  };

  const removeTask = async (index) => {
    const taskId = data[index]._id;
    deleteTask(taskId);
    refresh();
  };

  const toggleCompletedTask = (index) => {
    const taskObject = data[index];
    taskObject.done = !taskObject.done;
    const taskId = data[index]._id;
    modifyTask(taskObject, taskId);
    refresh();
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
