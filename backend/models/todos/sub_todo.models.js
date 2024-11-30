import mongoose, { Schema } from 'mongoose';

const subTodoSchema  = new Schema.SubTodo({
    content:{
        type:String,
        required: true,
    },
    complete:{
        type:Boolean,
        default: false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
},{timestamps:true});

export const subTodo = mongoose.model("SubTodo", subTodoSchema)