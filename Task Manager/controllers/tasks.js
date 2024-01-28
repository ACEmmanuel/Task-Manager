// const Task = require("../models/task")
const Task = require("../models/task")
const asyncWrapper = require("../middleware/async")
const { createCustomCode } = require("../errors/customError")

// Get All Task
const getAllTask = asyncWrapper(async (req, res) => {
  const task = await Task.find({})
  res.status(201).json({ task })
})

// Create Task
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json({ task })
})

// Get Single Task
const getTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params
  const task = await Task.findOne({ _id: taskID })

  if (!task) {
    return next(createCustomCode(`No task with id: ${taskID}`, 404))
  }
  res.status(201).json({ task })
})

// Delete Task
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params
  const task = await Task.findOneAndDelete({ _id: taskID })

  if (!task) {
    return next(createCustomCode(`No task with id: ${taskID}`, 404))
  }

  res.status(201).json({ task })
})

// Update Task
const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!task) {
    return next(createCustomCode(`No task with id: ${taskID}`, 404))
  }

  res.status(201).json({ task })
})

// const asyncWrapper = require("../middleware/async")
// const { createCustomCode } = require("../errors/customError")

// Get All Task
// const getAllTask = async (req, res) => {
//   try {
//     const task = await Task.find({})
//     res.status(201).json({ task })
//   } catch (error) {
//     res.status(500).json({ msg: error })
//   }
// }

// // Create Task
// const createTask = async (req, res) => {
//   try {
//     const task = await Task.create(req.body)
//     res.status(201).json({ task })
//   } catch (error) {
//     res.status(500).json({ msg: error })
//   }
// }

// // Get Single Task
// const getTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params
//     const task = await Task.findOne({ _id: taskID })

//     if (!task) {
//       return res.status(404).json({ msg: `No task with id: ${taskID}` })
//     }
//     res.status(201).json({ task })
//   } catch (error) {
//     res.status(500).json({ msg: error })
//   }
// }

// // Delete Task
// const deleteTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params
//     const task = await Task.findOneAndDelete({ _id: taskID })

//     if (!task) {
//       return res.status(404).json({ msg: `No task with id: ${taskID}` })
//     }
//     res.status(201).json({ task })
//   } catch (error) {
//     res.status(500).json({ msg: error })
//   }
// }

// // Update Task
// const updateTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params
//     const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
//       new: true,
//       runValidators: true,
//     })

//     if (!task) {
//       return res.status(404).json({ msg: `No task with id: ${taskID}` })
//     }
//     res.status(201).json({ task })
//   } catch (error) {
//     res.status(500).json({ msg: error })
//   }
// }

module.exports = {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
}
