let mongoose = require('mongoose');


let modelSchema = new mongoose.Schema({
    name:{required:[true, 'Must be provided'],
          maxlength: [20, 'Be not exceed 20 characters'],
          trim: true,
          type: String
        }, completed: {
            type: Boolean,
            default: false
        }
})


module.exports = mongoose.model('Task', modelSchema);