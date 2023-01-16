export interface Data {
  _id: number;
  name: string;
  completed: boolean;
};

export interface Response {
  message: string;
  task: Data;
};

export interface Error {
  message: string;
  error: string;
};