import React  from "react";
import "./AddTask.css";

const AddTask = ({ addTask, setTask }) => {
  
  return(
    <div className="add-task">
      <input
        id="add-task"
        type="text"
        placeholder="Write new task..."
        onChange={e => setTask(e.target.value)}
      />
      <button onClick={() => addTask( )}>Add</button>
    </div>
  );
};

export default AddTask;