var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
   title: {
        type: String,
        Required: 'Kindly enter the title of the task'
    },

    desc: {
        type: String,
        Required: 'Kindly enter the descriptions of the task'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: 'pending'
    },
    completed_date: {
        type: Date
    }
   
});

module.exports = mongoose.model('todo', TaskSchema);