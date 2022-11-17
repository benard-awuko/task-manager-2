let getAllTasks = (req,res)=>{
     res.send('All tasks....')
}

let createTask = (req,res)=>{
     res.json(req.body)
}

let singleTask = (req,res)=>{
     res.json({id:req.params.id})
}

let deleteTask = (req,res)=>{
     res.json({id:req.params.id})
}

let updateTask = (req,res)=>{
   res.json({id:req.params.id})
}


module.exports = {getAllTasks, createTask, singleTask, deleteTask, updateTask}