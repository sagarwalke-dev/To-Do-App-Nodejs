const mongoose=require('mongoose');

const taskSchema=mongoose.Schema({
    taskId:{type:Number, require:true,unique:true},
    taskName:{type:String,require:true},
    taskType:{type:String},
    taskDesc:{type:String},
    taskDate:{type:Date, default:Date.now()},
    taskStatus:{type:Boolean,default:false},
});

//export model 
module.exports=mongoose.model('task',taskSchema,'task');