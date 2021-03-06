const mongoose = require('mongoose');
const Author = require('./Author')



const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    author: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Author'
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    }

});
module.exports = mongoose.model('Book',schema)