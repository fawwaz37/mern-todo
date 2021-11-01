import Todo from "../db/model.js"
import mongoose from "mongoose"

export const readTodos = async(req, res) => {
    try {
        const todo = await Todo.find({});
        res.status(200).json(todo)
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const createTodos = async(req, res) => {
    try {
        const { title, content } = req.body;
        const todo = await Todo.create({ title, content });
        res.status(200).send(`Sukses Create ${title} and ${content}`)
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const updateTodo = async(req, res) => {
    const { id } = req.params
    const { title, content } = req.body
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`Id ${id} is not Valid`)
    }
    const todo = {title, content, _id: id};
    await Todo.findByIdAndUpdate(id, todo, {new: true})
    res.json(todo);
}