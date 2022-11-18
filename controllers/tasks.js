let Task = require('../models/Tasks')
let getAllTasks = async (req, res) =>{
    try{
         let tasks = await Task.find({})
  res.status(200).json({tasks});
    }catch(error){
      res.status(500).json({msg:error})
    }
  
}

let createTask = async(req, res) =>{
       try{
            let task = await Task.create(req.body)
            res.status(201).json({task})
       }catch(error){
        res.status(500).json({msg:error})
       }
}

let deleteTask = async(req, res) =>{
  try{
       let {id:taskID} = req.params;
       let task = await Task.findOneAndDelete({_id:taskID})
       if(!task){
        return res.status(400).json({msg: `No task with id: ${taskID} found`})
       }
       res.status(200).json({task})
  }catch(error){
   res.status(500).json({msg:error})
  }
}

let getSingleTask = async (req, res) =>{
  try{
    let {id:taskID} = req.params;
    let task = await Task.findOne({_id:taskID});
      if(!task){
        return res.status(404).json({msg:`There is no task with id: ${taskID}`})
      }

    res.status(200).json({task})
  }catch(error){
     res.status(500).json({msg:error})
  }
}

let editTask = async(req, res) =>{
    try{
      let {id:taskID} = req.params;
      let task = await Task.findOneAndUpdate({_id:taskID}, req.body,{new:true, runValidators:true})
      if(!task){
        return res.status(404).json({msg:`Task with id: ${taskID} not found`})
      }
      res.status(200).json({task})
    }catch(error){
     res.status(500).json({msg:error})
    }
}


module.exports = {getAllTasks, createTask, deleteTask, getSingleTask, editTask}