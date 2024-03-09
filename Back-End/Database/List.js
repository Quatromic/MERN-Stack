const mongoose = require('mongoose')
const Schema = mongoose.Schema

const List = new Schema({
    Title:{
        type:mongoose.SchemaTypes.String,
        required:true
    },
    Description:{
        type:mongoose.SchemaTypes.String,
        required:true
    },
    Deadline:{
        type:mongoose.SchemaTypes.String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('To do List',List)