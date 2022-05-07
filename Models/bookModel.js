const mongoose = require('mongoose');

const bookModel = new mongoose.Schema({
    "likes": {type:Number, required:true},
    "coverImage":{type:String, required:true},
    "content":{type:String, required:true},
    "timestamps": {type:String, required:true},
    "userId": { type: mongoose.Types.ObjectId, ref: 'userModel' }
});

module.exports = mongoose.model('bookModel', bookModel);