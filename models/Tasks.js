let mongoose = require('mongoose');


let TaskSchema = new mongoose.Schema({
    name:String, completed: Boolean
})

module.exports = mongoose.model('Task', TaskSchema);