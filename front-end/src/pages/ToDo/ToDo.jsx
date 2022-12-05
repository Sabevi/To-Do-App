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
    if (selectCategory === "todo") {
      setTaskList(data.filter((element) => !element.done));
    } else if (selectCategory === "done") {
      setTaskList(data.filter((element) => element.done));
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
    deleteTask(data[index]._id);
    refresh();
  };

  const toggleCompletedTask = (index) => {
    const taskObject = data[index];
    taskObject.done = !taskObject.done;
    modifyTask(taskObject, data[index]._id);
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
