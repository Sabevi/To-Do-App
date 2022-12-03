import React from "react";
import "./SelectTask.css";

const SelectTask = () => {
  
  return(
    <div className="select-task">
      <label htmlFor="select-task">Display : </label>
      <select id="select-task">
        <option value="all">All</option>
        <option value="only todo">Only Todo</option>
        <option value="only done">Only done</option>
      </select>
    </div>
  );
};

export default SelectTask;