let express = require('express');

let {getAllTasks, createTask, singleTask, deleteTask, updateTask} = require('../controllers/tasks')

let router = express.Router();

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(singleTask).delete(deleteTask).patch(updateTask)

module.exports = router;