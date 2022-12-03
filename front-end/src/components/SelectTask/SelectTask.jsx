import React from "react";
import "./SelectTask.css";
//import PropTypes from "prop-types";

const SelectTask = () => {
  return (
    <div className="select select-task-container">
      <label htmlFor="select-task" className="select-label">
        Display :{" "}
      </label>
      <select id="select-task">
        <option value="all">All</option>
        <option value="only todo">Only Todo</option>
        <option value="only done">Only done</option>
      </select>
    </div>
  );
};

export default SelectTask;
