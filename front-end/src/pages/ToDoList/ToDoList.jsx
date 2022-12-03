import React, { useState } from "react";
import "./ToDoList.css";
import "../../hooks/useGetToDoList";
//import useGetToDoList from "../../hooks/useGetToDoList";

const ToDoList = () => {
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

  // console.log(taskList);
  
  return(
    <>
        <main className="todo">
          <section className="todo-section">

            {/* Add task */}
            <div className="add-to-do">
              {/*ajouter après label invisible*/}
              <input 
                type="text" 
                placeholder="Write new task..."
                onChange={e => setTask(e.target.value)}
              />
              <button onClick={() => addTask( )}>Add</button>
            </div>


            {/* Filter */}
            {/*AJouter label ? */}
            <div className="todo-select">
              <p>Display : </p>
              <select>
                <option value="all">All</option>
                <option value="only todo">Only Todo</option>
                <option value="only done">Only done</option>
              </select>
            </div>

            {/*table*/}
            <table>
              <tbody>
                {taskList.map((task,index) =>(
                  <tr key={index}>
                    <td>
                      <label htmlFor={`task ${index + 1}`} className={task.done ? "task-undelined" : ""}>
                        <input 
                          id={`task ${index + 1}`}
                          type="checkbox"
                          onChange={() => toggleCompletedTask(index)}
                        />
                          {task.task}
                      </label>
                      <button onClick={() => removeTask(index)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
    </>
  );
};

export default ToDoList;