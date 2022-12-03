import React, { useState } from "react";
import AddTask from "../../components/AddTask/AddTask";
import SelectTask from "../../components/SelectTask/SelectTask";
import ToDoList from "../../components/ToDoList/ToDoList";
import "./ToDo.css";
//import useGetToDoList from "../../hooks/useGetToDoList";

const ToDo = () => {
  const [taskList, setTaskList] = useState([
    {
        "task": "cuisine à faire",
        "done": false,
    },
    {
        "task": "courses à faire",
        "done": false,
    },
    {
      "task": "sport à faire",
      "done": false,
    }
  ]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.length) {
      const newtaskList = [...taskList, { task, "done": false }]
      setTaskList(newtaskList);
    };
  };

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
            taskList={taskList} 
            toggleCompletedTask={toggleCompletedTask} 
            removeTask={removeTask}
          />
        </section>
      </main>
    </>
  );
};

export default ToDo;