const Task = require("../models/task")
exports.getAllTasks = async (req,res)=>{
    const task = await Task.find({})
    if(!task){
        res.status(501).json({message:"The Tasks doesnt exists"})
    }
    res.status(201).json(task)
}
exports.createTask = async (req,res)=>{
    try {
        const task = await Task.create(req.body);
        res.status(201).json({task})
    } catch (error) {
        console.error(error)
        res.status(501).json({message:error.message})

    }
}
exports.getTask = async (req,res)=>{
    const {id:taskID} = req.params;
    console.log(taskID)
    try {
        const task = await Task.findOne({_id:taskID})
        if(!task){
           return res.status(501).json({message:"there is no task with this name"})
        }
        res.status(201).json({task})
        
    } catch (error) {
        res.status(501).json({message:error.message})
    }
}
exports.deleteTask = async(req,res)=>{
    const {id:taskID} = req.params;
    try {
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(501).json({message:"there is no task with this name"})
         }
         res.status(201).json({task})
         
     } catch (error) {
         res.status(501).json({message:error.message})
     }
}
exports.updateTask = async(req,res)=>{
    const {id:taskID} = req.params;
    try {
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{new:true,runValidators:true})
        if(!task){
            return res.status(501).json({message:"there is no task with this name"})
         }
         res.status(201).json({task})
         
     } catch (error) {
         res.status(501).json({message:error.message})
     }
}