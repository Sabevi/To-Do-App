import React  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
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
      <button onClick={() => addTask( )}>
        <FontAwesomeIcon icon={faPlus} />
        {" "}
        Add
      </button>
    </div>
  );
};

export default AddTask;