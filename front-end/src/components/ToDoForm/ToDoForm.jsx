import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import "./ToDoForm.css";

const ToDoForm = ({ updateTaskValue, addTask }) => {
  return (
    <form onSubmit={addTask} className="add-task-container">
      <label htmlFor="add-task" className="sr-only">
        Add a new task
      </label>
      <FontAwesomeIcon icon={faMapMarker} className="input-icon" />
      <input
        id="add-task"
        type="text"
        placeholder="Write new task ..."
        onChange={updateTaskValue}
      />
      <button
        type="submit"
        className="add-task-button"
      >
        <FontAwesomeIcon icon={faPlus} />
        {" "}
        Add
      </button>
    </form>
  );
};

ToDoForm.propTypes = {
  updateTaskValue: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
};

export default ToDoForm;
