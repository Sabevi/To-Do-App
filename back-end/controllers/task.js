const Task = require("../models/task");

exports.getTasks = (req, res) => {
  Task.find(req.body)
    .then((task) => res.status(200).json(task))
    .catch((err) =>
      res.status(404).json({ message: "Task list not found", error: err.message })
    );
};

exports.createTask = (req, res) => {
  Task.create(req.body)
    .then((task) =>
      res.status(201).json({ message: "Task added successfully", task })
    )
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to add task", error: err.message })
    );
};

exports.updateTask = (req, res) => {
  Task.findByIdAndUpdate(req.params.id, req.body)
    .then((task) => res.status(201).json({ message: "Task updated successfully", task }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to update task", error: err.message })
    );
};

exports.deleteTask = (req, res) => {
  Task.findByIdAndRemove(req.params.id, req.body)
    .then((task) =>
      res.status(200).json({ message: "Task deleted successfully", task })
    )
    .catch((err) =>
      res
        .status(404)
        .json({ message: "Failed to delete task", error: err.message })
    );
};
