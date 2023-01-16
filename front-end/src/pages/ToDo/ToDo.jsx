import React, { useState, useEffect } from "react";
import AddTask from "../../components/AddTask/AddTask";
import SelectTask from "../../components/SelectTask/SelectTask";
import ToDoList from "../../components/ToDoList/ToDoList";
import useGetTaskList from "../../hooks/useGetTaskList";
import Loading from "../../assets/Loading";
import "./ToDo.css";

const ToDo = () => {
  const { loading, data, setData } = useGetTaskList();
  const [taskList, setTaskList] = useState([]);

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
