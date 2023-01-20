import { Data, TaskList } from "config/common.types";

export interface SelectTaskProps {
  data: Data[];
  setTaskList: React.Dispatch<React.SetStateAction<TaskList[]>>;
};