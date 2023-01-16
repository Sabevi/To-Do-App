import React, { useState, useEffect } from "react";
import "./SelectTask.css";
import { Data } from "../../config/models";

interface Props {
  data: Data[];
  setTaskList: React.Dispatch<React.SetStateAction<Data[]>>;
}

const SelectTask = ({ data, setTaskList }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  
  useEffect(() => {
    if (selectedCategory === "todo") {
      setTaskList(data.filter((element: Data) => !element.completed));
    } else if (selectedCategory === "done") {
      setTaskList(data.filter((element: Data) => element.completed));
    } else if (selectedCategory === "all") {
      setTaskList(data);
    }
  }, [selectedCategory]);

  const updateSelectedCategoryValue = (e: React.FormEvent) => {
    let input = e.target as HTMLInputElement;
    setSelectedCategory(input.value);
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

export default SelectTask;
