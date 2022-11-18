let Task = require('../models/Tasks');

let asyncWrapper = require('../middleware/async')

let getAllTasks = asyncWrapper(   async(req,res)=>{
       let tasks = await Task.find({});
       res.status(200).json({tasks})
}
)

let createTask = asyncWrapper(async(req,res)=>{
    
 let task = await Task.create(req.body);
   res.status(201).json({task})
    
}
)

let deleteTask =  asyncWrapper( async(req,res)=>{

    let {id:taskID} = req.params;
    let task = await Task.findOneAndDelete({_id:taskID})
    
    if(!task){
        return res.status(404).json({msg:`Task with id: ${taskID} does not exist.`})
    }
    res.status(200).json({task})
  })

let getSingleTask = asyncWrapper( async(req,res)=>{
 
    let {id:taskID} = req.params;
    let task = await Task.findOne({_id:taskID})
    if(!task){
        return res.status(404).json({msg:`Item with id: ${taskID} not found`})
    }
      res.status(200).json({task})

  })

let editTask =asyncWrapper( async(req,res)=>{

  let {id:taskID}  = req.params;
 let task = await Task.findOneAndUpdate({_id:taskID}, req.body,{new:true, runValidators:true})

 if(!task){
  return res.status(404).json({msg:`Task with id: ${taskID} does not exist`})
 }

 res.status(200).json({task})

}
)

module.exports = {getAllTasks, createTask, deleteTask, getSingleTask, editTask }