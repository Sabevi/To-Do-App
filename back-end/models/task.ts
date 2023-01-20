import { Schema, model } from 'mongoose';

export interface ITask {
  name: string,
  completed: boolean,
}

const TaskSchema = new Schema<ITask>({
  name: { type: String, required: true },
  completed: { type: Boolean, required: true },
});

export const Task = model<ITask>("Task", TaskSchema);
