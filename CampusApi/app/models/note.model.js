const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    name: String,
    department: String,
    id:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);
