let Task = require('../models/Tasks')

let getAllTasks = (req,res)=>{
res.send('All tasks...')
}

let createTask = async(req,res)=>{
    let task = await Task.create(req.body)
res.json({task})
}

let deleteTask = (req,res)=>{
res.json({id: req.params.id, data: req.body.name})
}

let getSingleTask = (req,res)=>{
res.json({id: req.params.id, data: req.body.name})
}

let editTask = (req,res)=>{
res.json({id: req.params.id, data: req.body.name})
}



module.exports = {getAllTasks, createTask, deleteTask, getSingleTask, editTask }