const Todo = require("../models/todo");

exports.getAllTodo = (req, res) => {
  Todo.find(req.body)
    .then((todo) => res.status(200).json(todo))
    .catch((err) =>
      res.status(404).json({ message: "Todo list not found", error: err.message })
    );
};

exports.createTodo = (req, res) => {
  Todo.create(req.body)
    .then((todo) =>
      res.status(201).json({ message: "Todo added successfully", todo })
    )
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to add todo", error: err.message })
    );
};

exports.updateTodo = (req, res) => {
  Todo.findByIdAndUpdate(req.params.id, req.body)
    .then((todo) => res.status(201).json({ message: "Todo updated successfully", todo }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to update todo", error: err.message })
    );
};

exports.deleteTodo = (req, res) => {
  Todo.findByIdAndRemove(req.params.id, req.body)
    .then((todo) =>
      res.status(200).json({ message: "Todo deleted successfully", todo })
    )
    .catch((err) =>
      res
        .status(404)
        .json({ message: "Failed to delete todo", error: err.message })
    );
};
