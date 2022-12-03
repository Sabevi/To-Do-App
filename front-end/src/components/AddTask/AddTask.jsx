import React  from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./AddTask.css";

const AddTask = ({ addTask, setTask }) => {
  
  return(
    <div className="add-task">
      <input
        className="input"
        id="add-task"
        type="text"
        placeholder="Write new task..."
        onChange={e => setTask(e.target.value)}
      />
      <button className="add-task-button" onClick={() => addTask( )}>
        <FontAwesomeIcon icon={faPlus} />
        {" "}
        Add
      </button>
    </div>
  );
};

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
  setTask: PropTypes.func.isRequired
};

export default AddTask;