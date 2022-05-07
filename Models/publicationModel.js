const mongoose = require('mongoose');

const publicationModel = new mongoose.Schema({
    "name": {type:String, required:true},
    "timestamps": {type:String, required:true},
    "bookId": { type: mongoose.Types.ObjectId, ref: 'bookModel' }
});

module.exports = mongoose.model('publicationModel', publicationModel);