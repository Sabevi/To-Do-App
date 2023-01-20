import { Data } from "config/common.types";

export interface AddTaskProps {
  setData: React.Dispatch<React.SetStateAction<Data[]>>;
}

export interface AddTaskRequestProps {
  name: string,
  completed: boolean
}