import React, { useState, useEffect, FC } from "react";
import useGetTaskList from "../../hooks/useGetTaskList";
import Loading from "../../assets/Loading";
import "./ToDo.css";
import { AddTask } from "components/AddTask";
import { SelectTask } from "components/SelectTask";
import { ToDoList } from "components/ToDoList/ToDoList";
import { TaskList } from "config/common.types";

const ToDo: FC = () => {
  const { loading, data, setData } = useGetTaskList();
  const [taskList, setTaskList] = useState<TaskList[]>([]);

  useEffect(() => {
    setTaskList(data);
  }, [data]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main>
          <h1>To Do App</h1>
          <AddTask
          setData={setData}
          />
          <SelectTask
            data={data}
            setTaskList={setTaskList}
          />
          <ToDoList
            data={data}
            setData={setData}
            taskList={taskList}
          />
        </main>
      )}
    </>
  );
};

export default ToDo;
