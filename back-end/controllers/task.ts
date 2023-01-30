import { Request, Response } from "express";
import { Task } from "../models/task";

export const getTasks = async (req: Request, res: Response): Promise<void> => {
  try{
    const task = await Task.find(req.body);
    res.status(200).json(task);
  } catch(err: any){
      res.status(404).json({ message: "Task list not found", error: err.message });
  }
};

export const createTask = async (req: Request, res: Response): Promise<void> => {
  try{
    const task = await Task.create(req.body);
    res.status(201).json({ message: "Task added successfully", task });
  } catch(err: any){
      res.status(400).json({ message: "Failed to add task", error: err.message });
  }
};

export const updateTask = async (req: Request, res: Response): Promise<void> => {
  try{
    const task = await Task.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Task updated successfully", task });
  } catch(err: any){
      res.status(400).json({ message: "Failed to update task", error: err.message });
  }
};

export const deleteTask = async (req: Request, res: Response): Promise<void> => {
  try{
    const task = await Task.findByIdAndRemove(req.params.id, req.body);
    res.status(200).json({ message: "Task deleted successfully", task });
  } catch(err: any){
      res.status(404).json({ message: "Failed to delete task", error: err.message });
  }
};
