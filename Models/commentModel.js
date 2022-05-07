const mongoose = require('mongoose');

const commentModel = new mongoose.Schema({
    "body": {type:String, required:true},
    "timestamps": {type:String, required:true},
    "userId": { type: mongoose.Types.ObjectId, ref: 'userModel' },
    "bookId": { type: mongoose.Types.ObjectId, ref: 'bookModel' }
});

module.exports = mongoose.model('commentModel', commentModel);