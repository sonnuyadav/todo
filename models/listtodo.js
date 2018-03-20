var mongoose = require('mongoose');
Schema = mongoose.Schema;
var todo = new Schema(Schema.Types.Mixed, { strict: false });
module.exports = mongoose.model('todos', todo);