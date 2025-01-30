import Router from "express-promise-router"
import {
  getTask,
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks.controller.js";

const router = Router();


router.get("/tasks", getAllTasks);

router.get("/tasks/:id", getTask);

router.post("/tasks", createTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);

export default router;
