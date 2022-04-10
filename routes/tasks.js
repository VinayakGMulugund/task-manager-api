const { Router } = require('express')
const {getAllTasks, 
    getTask, 
    deleteTask, 
    updateTask, 
    createTask} = require('../controllers/tasks')


const router = Router()

router.get('/', getAllTasks)
router.post('/', createTask)
router.delete('/:id', deleteTask)
router.get('/:id', getTask)
router.patch('/:id', updateTask)

module.exports = router