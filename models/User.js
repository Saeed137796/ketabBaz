const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');



const schema = new mongoose.Schema({
    name: {type:String,required:true},
    username: {type:String,required:true,unique:true,index:true},
    password: {type:String,required:true},
    created_at:{type:Date,default:Date.now}

});
schema.plugin(uniqueValidator);
module.exports = mongoose.model('User', schema);