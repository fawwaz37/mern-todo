import mongoose from "mongoose";

const Todos = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: String
}, { timestamps: true })
;
const Todo = mongoose.model('todo', Todos);

export default Todo;