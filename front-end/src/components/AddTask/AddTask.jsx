import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import useSendTask from "../../hooks/useSendTask";
import "./AddTask.css";

const AddTask = ({ setData }) => {
  const [name, setName] = useState("");
  const { sendTask } = useSendTask();

  const updateTaskValue = (e) => {
    setName(e.target.value);
  };

  const addTask = async (e) => {
    e.preventDefault();

    if (name.length) {
      const response = await sendTask({ name, completed: false });
      setData((oldData) => [...oldData, response.task]);
      setName("");
      document.querySelector("form").reset();
    }
  };

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

AddTask.propTypes = {
  updateTaskValue: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
};

export default AddTask;
