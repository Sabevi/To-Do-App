import { Data, TaskList } from "config/common.types";

export interface Response {
  message: string;
  task: Data;
};

export interface ToDoListProps {
  data: Data[];
  setData: React.Dispatch<React.SetStateAction<Data[]>>;
  taskList: TaskList[];
}