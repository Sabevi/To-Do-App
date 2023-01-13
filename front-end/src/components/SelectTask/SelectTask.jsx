import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./SelectTask.css";

const SelectTask = ({ data, setTaskList }) => {

  const [selectedCategory, setSelectedCategory] = useState("");
  
  useEffect(() => {
    if (selectedCategory === "todo") {
      setTaskList(data.filter((element) => !element.completed));
    } else if (selectedCategory === "done") {
      setTaskList(data.filter((element) => element.completed));
    } else if (selectedCategory === "all") {
      setTaskList(data);
    }
  }, [selectedCategory]);

  const updateSelectedCategoryValue = (e) => {
    setSelectedCategory(e.target.value);
  };

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
