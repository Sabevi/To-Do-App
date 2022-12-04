import React, { useState } from "react";
import AddTask from "../../components/AddTask/AddTask";
import SelectTask from "../../components/SelectTask/SelectTask";
import ToDoList from "../../components/ToDoList/ToDoList";
import "./ToDo.css";
import useGetToDoList from "../../hooks/useGetToDoList";
import useSendTask from "../../hooks/useSendTask";

const ToDo = () => {
  const { loading, data, refresh } = useGetToDoList();
  const { sendTask } = useSendTask();
  const [taskList, setTaskList] = useState(data);
  const [task, setTask] = useState("");

  const addTask = async () => {
    if (task.length) {
      const taskObject = { task, "done": false};
      sendTask(taskObject);
      refresh();
    }
  }

  const removeTask = index => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  };

  const toggleCompletedTask = index => {
    const newTaskList = [...taskList];
    newTaskList[index].done = !newTaskList[index].done;
    setTaskList(newTaskList);
  };


  if(loading) {
    return <p>Loading</p>
  }
  
  return(
    <>
      <main className="todo">
        <section className="todo-section">
          <AddTask 
            addTask={addTask} 
            setTask={setTask}
          />
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