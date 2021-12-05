const express = require("express");
const { addTask, allTasks, updateTask, deleteTask, delateTaskAdmin} = require("../controller/todo");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorizathion");

const taskRouter = express.Router();

taskRouter.post("/addTask", authentication, addTask);
taskRouter.get("/allTask", authentication, allTasks); 

taskRouter.put("/updateTask/:id", authentication, updateTask);


taskRouter.get("/delateTaskAdmin", authentication,authorization, delateTaskAdmin); 
taskRouter.delete("/deleteTask/:id", authentication, deleteTask);


module.exports = taskRouter;