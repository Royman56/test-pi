import Priority from "../models/PriorityModels.js"

//GET ALL TASKS
export const getPriorities = async (req, res) =>{
    try {
        const priorities = await Priority.find();
         res.status(200).json(priorities);
     } catch (err) {
         res.status(500).json(err);
     }
} 

//CREATE PRIORITY
export const createPriority = async (req, res) =>{
    const newPriority = new Priority(req.body); 
   
    try {
     const savedPriority = await newPriority.save();
     res.status(200).json(savedPriority);  
   } catch (err) {
       res.status(500).json(err);
   }
} 