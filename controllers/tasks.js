const Task = require('../models/task')
const asyncWrapper = require('../middlewares/asyncWrapper')

const getAllTasks = asyncWrapper(async (req,res)=>{
    const allTasks = await Task.find({})
    return res.status(200).json(allTasks)
})

const createTask = asyncWrapper(async (req,res)=>{
    const mytask = await Task.create(req.body)
    res.status(201).json({mytask})
})

const getTask = asyncWrapper(async (req,res)=>{
    const task = await Task.findById(req.params.id)
    res.status(200).json({name: task.name})
})

const updateTask = asyncWrapper(async (req,res)=>{
    const id = req.params.id
    const task = await Task.findByIdAndUpdate(id, req.body, {new:true, runValidators:true})
    res.status(200).json(task)
})

const deleteTask = asyncWrapper(async (req,res)=>{
    const task = await Task.findByIdAndDelete(req.params.id)
    res.status(200).send()
})

module.exports = {getAllTasks, getTask, deleteTask, updateTask, createTask}
