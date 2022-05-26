import express from "express";
import { login, register } from "../controllers/AuthController.js";
import { createPriority, getPriorities } from "../controllers/PriorityController.js";
import { getTasks, createTask, updateTask, deleteTask, getOneTask, getTasksIsDone} from "../controllers/TaskController.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

//ROUTES AUTH
router.post("/register", register);
router.post("/login", login);

//ROUTES PRIORITY
router.get("/priorities", getPriorities);
router.post("/priority", createPriority);

//ROUTES TASK
router.get("/task/get-tasks", getTasks);
router.get("/task/get-one-task/:id", getOneTask);
router.get("/task/tasks-done", getTasksIsDone);
router.post("/task/create-task", createTask);
router.put("/task/update-task", updateTask);
router.put("/task/update-task-status", updateTask);
router.delete("/task/delete-task/:id", deleteTask);

//ROUTES VERIFY TOKEN
router.get("/checkauthentication", verifyToken, (req, res, next) =>{
    res.send("You are logged in!");
});

export default router;