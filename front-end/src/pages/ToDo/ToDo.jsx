import React, { useState, useEffect } from "react";
import AddTask from "../../components/AddTask/AddTask";
import SelectTask from "../../components/SelectTask/SelectTask";
import ToDoList from "../../components/ToDoList/ToDoList";
import useGetToDoList from "../../hooks/useGetToDoList";
import useSendTask from "../../hooks/useSendTask";
import useDeleteTask from "../../hooks/useDeleteTask";
import useModifyTask from "../../hooks/useModifyTask";
import Loading from "../../assets/Loading";
import "./ToDo.css";

const ToDo = () => {
  const { loading, data, refresh } = useGetToDoList();
  const [taskList, setTaskList] = useState([]);
  const { sendTask } = useSendTask();
  const { deleteTask } = useDeleteTask();
  const { modifyTask } = useModifyTask();
  const [task, setTask] = useState("");
  const [selectCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    setTaskList(data);
  }, [data]);

  console.log(taskList);

  useEffect(() => {
    if (selectCategory === "only todo") {
      const newTaskList = taskList.filter((element) => !element.done);
      setTaskList(newTaskList);
    } else if (selectCategory === "only done") {
      const newTaskList = taskList.filter((element) => element.done);
      setTaskList(newTaskList);
    } else if (selectCategory === "all") {
      setTaskList(data);
    }
  }, [selectCategory]);

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
        <main className="todo">
          <section className="todo-section">
            <AddTask addTask={addTask} setTask={setTask} />
            <SelectTask setSelectedCategory={setSelectedCategory} />
            <ToDoList
              toggleCompletedTask={toggleCompletedTask}
              removeTask={removeTask}
              taskList={taskList}
            />
          </section>
        </main>
      )}
    </>
  );
};

export default ToDo;
