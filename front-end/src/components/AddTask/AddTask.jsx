import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./AddTask.css";

const AddTask = ({ updateTaskValue, addTask }) => {
  return (
    <div className="add-task-container">
      <label htmlFor="add-task" className="sr-only">
        Add a new task
      </label>
      <input
        className="input"
        id="add-task"
        type="text"
        placeholder="Write new task ..."
        onChange={(e) => updateTaskValue(e)}
      />
      <button
        type="button"
        className="add-task-button"
        onClick={() => addTask()}
      >
        <FontAwesomeIcon icon={faPlus} />Add
      </button>
    </div>
  );
};

AddTask.propTypes = {
  updateTaskValue: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
};

export default AddTask;
