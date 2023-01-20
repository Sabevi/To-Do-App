import { ITask } from "../models/task";
import { Request, Response } from "express";

const Task = require("../models/task");

exports.getTasks = (req: Request, res: Response) => {
  Task.find(req.body)
    .then((task: ITask) => res.status(200).json(task))
    .catch((err) =>
      res.status(404).json({ message: "Task list not found", error: err.message })
    );
};

/* 
Refactoring: async await

exports.getTasks = async (req: Request, res: Response): Promise<void> => {
  try{
    const task = Task.find(req.body);
    res.status(200).json(task);
  } catch(err: any){
      res.status(404).json({ message: "Task list not found", error: err.message })
  }
}; */

exports.createTask = (req: Request, res: Response) => {
  Task.create(req.body)
    .then((task: ITask) =>
      res.status(201).json({ message: "Task added successfully", task })
    )
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to add task", error: err.message })
    );
};

exports.updateTask = (req: Request, res: Response) => {
  Task.findByIdAndUpdate(req.params.id, req.body)
    .then((task: ITask) => res.status(201).json({ message: "Task updated successfully", task }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to update task", error: err.message })
    );
};

exports.deleteTask = (req: Request, res: Response) => {
  Task.findByIdAndRemove(req.params.id, req.body)
    .then((task: ITask) =>
      res.status(200).json({ message: "Task deleted successfully", task })
    )
    .catch((err) =>
      res
        .status(404)
        .json({ message: "Failed to delete task", error: err.message })
    );
};
