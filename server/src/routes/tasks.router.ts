import express from "express";
import { TaskController } from "../controllers/tasks.controller";


const tasksRouter=express.Router();


tasksRouter.get('/', TaskController.getAll);
tasksRouter.get('/:id', TaskController.get);
tasksRouter.post('/', TaskController.store);
tasksRouter.put('/:id',TaskController.update);
tasksRouter.delete('/:id', TaskController.delete);


export {tasksRouter};