import express, { Application } from "express";
import mongoose from "mongoose";

import { corsHeaders } from "./middlewares/cors.middleware";
import { tasksRouter } from "./routes/tasks.router";
import { Task } from "./models/task";


const app:Application=express();

// mongodb://localhost:27017/
app.use(corsHeaders);

mongodb://localhost:27017/

mongoose.connect("mongodb://localhost:27017/TaskList")
    .then(()=>{
        console.log("Prisijungėme prie MongoDB");
    })
    .catch((error)=>console.log(error));

    // visai sistemai middleware kuri pasiimsim is express
app.use(express.json());


app.use("/tasks", tasksRouter);

export {app};