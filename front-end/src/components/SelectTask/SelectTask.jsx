import React from "react";
import PropTypes from "prop-types";
import "./SelectTask.css";

const SelectTask = ({ updateSelectedCategoryValue }) => {
  return (
    <div className="select select-task-container">
      <label htmlFor="select-task" className="select-label">
        Display :
      </label>
      <select id="select-task" onChange={updateSelectedCategoryValue}>
        <option value="all">All</option>
        <option value="todo">Only Todo</option>
        <option value="done">Only done</option>
      </select>
    </div>
  );
};

SelectTask.propTypes = {
  updateSelectedCategoryValue: PropTypes.func.isRequired,
};

export default SelectTask;
