import React, { useState, FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import useSendTask from "../../hooks/useSendTask";
import "./AddTask.css";
import { AddTaskProps } from "./AddTask.types";

export const AddTask: FC<AddTaskProps> = ({ setData }) => {
  const [name, setName] = useState<string>("");
  const { sendTask } = useSendTask();

  const updateTaskValue = (e: React.FormEvent) => {
    let input = e.target as HTMLInputElement;
    setName(input.value);
  };

  const addTask = async (e: React.FormEvent) => {
    e.preventDefault();

    if (name.length) {
      const response = await sendTask({ name, completed: false });
      setData((oldData) => [...oldData, response.task]);
      setName("");
      document.querySelector("form")?.reset();
    }
  };

  return (
    <form onSubmit={addTask} className="add-task-container">
      <label htmlFor="add-task" className="sr-only">
        Add a new task
      </label>
      <input
        id="add-task"
        type="text"
        placeholder="Add a task ..."
        onChange={updateTaskValue}
        data-cy="add-task"
      />
      <button
        type="submit"
        className="button is-rounded big-action-button"
        data-cy="submit"
      >
        <FontAwesomeIcon icon={faPlus} className="add-task-icon" />
        Add
      </button>
    </form>
  );
};