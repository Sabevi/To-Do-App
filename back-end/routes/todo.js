const express = require("express");
const router = express.Router();

const {
  getAllTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo");


router.get("/", getAllTodo);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
