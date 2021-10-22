import Todo from "../db/model.js"

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