const mongoose = require('mongoose');



const schema = new mongoose.Schema({
    name: {type:String,required:true},
    username: {type:String,required:true},
    password: {type:String,required:true},
    created_at:{type:Date,default:Date.now}

});
module.exports = mongoose.model('User', schema);