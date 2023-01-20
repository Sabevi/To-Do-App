import { Router } from "express";
const router = Router();

const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/task");


router.get("/", getTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
