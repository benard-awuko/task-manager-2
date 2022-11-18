let mongoose = require('mongoose');


let TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        maxlength:[20, 'Must be not more than 20 characters'],
        required:[true, 'Must be provided'],
        trim:true
    }, completed: {
        default:false,
        type:Boolean
    }
})

module.exports = mongoose.model('Task', TaskSchema)