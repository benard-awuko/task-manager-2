let express = require('express');
let {getAllTasks, createTask, deleteTask, getSingleTask, editTask} = require('../controllers/tasks')
let router = express.Router();


router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getSingleTask).delete(deleteTask).patch(editTask)

module.exports = router;