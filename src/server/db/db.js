var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/todos' ||  'mongodb://brifan:root@ds011745.mlab.com:11745/kkkkk');

var Todo = mongoose.model('Todo', {
    task: String,
    isCompleted: Boolean,
    isEditing: Boolean
});

module.exports.Todo = Todo;
