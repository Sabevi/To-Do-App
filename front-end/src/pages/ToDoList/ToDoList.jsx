import React, { useState } from "react";
import "./ToDoList.css";
import "../../hooks/useGetToDoList";
//import useGetToDoList from "../../hooks/useGetToDoList";

const ToDoList = () => {
  const [task, setTask] = useState("");
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
  console.log(taskList);

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

            {/*table*/}
            <table>
              <tbody>
                {taskList.map((element,index) =>(
                  <tr key={index}>
                    <td>
                      <label>
                        <input type="checkbox" />{element.task}
                      </label>
                      <button onClick={e => removeTask(index)}>Delete</button>
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