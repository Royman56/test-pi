import Task from "../models/TaskModels.js";
import mongoose from 'mongoose';

//GET ALL TASKS
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET ONE TASK
export const getOneTask = async (req, res) =>{
    try {
       const task = await Task.findById(req.params.id);
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json(err);
    }
};

//GET TASKS IS DONE
export const getTasksIsDone = async (req, res) => {
  try {
    const tasks = await Task.find({isDone: true});
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json(err);
  }
};

//CREATE TASK
export const createTask = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    const savedTask = await newTask.save();
    res.status(200).json(savedTask);
  } catch (err) {
    res.status(500).json(err);
  }
};

//UPDATE TASK
export const updateTask = async (req, res) => {
  try {
    let id = req.body._id;    
    const updateTask = await Task.findByIdAndUpdate(
      {_id: id},
      req.body
    );
    res.status(200).json(updateTask);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

//DELETE TASK
export const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json("Task deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};
