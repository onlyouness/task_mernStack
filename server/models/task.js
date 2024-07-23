const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    "name":{type:String,required:true,trim:true,maxlength:20},
    "description":{type:String,required:true},
    "completed":{type:Boolean,default:false},
    "user_id":{type:String,required:true},
    "created_at":{type:Date,default:Date.now}
})
const Task  = mongoose.model("tasks",TaskSchema)
module.exports = Task
