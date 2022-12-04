import React from "react";
import PropTypes from "prop-types";
import "./SelectTask.css";

const SelectTask = ({ setSelectedCategory }) => {
  return (
    <div className="select select-task-container">
      <label htmlFor="select-task" className="select-label">
        Display :
      </label>
      <select id="select-task" onChange={e => setSelectedCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="only todo">Only Todo</option>
        <option value="only done">Only done</option>
      </select>
    </div>
  );
};

SelectTask.propTypes = {
  setSelectedCategory: PropTypes.func.isRequired
};

export default SelectTask;
