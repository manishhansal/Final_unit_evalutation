const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    "firstName": {type:String, required:true},
    "lastName":{type:String, required:true},
    "age":{type:Number, required:true},
    "email":{type:String, required:true},
    "profileImages": {type:Array, required:true},
    "timestamps": {type:String, required:true}
});

module.exports = mongoose.model('userModel', userModel);