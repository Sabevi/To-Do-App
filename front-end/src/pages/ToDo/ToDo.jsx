import React, { useState } from "react";
import AddTask from "../../components/AddTask/AddTask";
import SelectTask from "../../components/SelectTask/SelectTask";
import ToDoList from "../../components/ToDoList/ToDoList";
import useGetToDoList from "../../hooks/useGetToDoList";
import useSendTask from "../../hooks/useSendTask";
import useDeleteTask from "../../hooks/useDeleteTask";
import useModifyTask from "../../hooks/useModifyTask";
import "./ToDo.css";

const ToDo = () => {
  const { loading, data, refresh } = useGetToDoList();
  const { sendTask } = useSendTask();
  const { deleteTask } = useDeleteTask();
  const { modifyTask } = useModifyTask();
  const [task, setTask] = useState("");
  console.log(data);

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

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <>
      <main className="todo">
        <section className="todo-section">
          <AddTask addTask={addTask} setTask={setTask} />
          <SelectTask />
          <ToDoList
            toggleCompletedTask={toggleCompletedTask}
            removeTask={removeTask}
            data={data}
          />
        </section>
      </main>
    </>
  );
};

export default ToDo;
