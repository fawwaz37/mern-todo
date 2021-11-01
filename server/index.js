import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import todosRouter from "./routes/todos.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5050

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/todo', todosRouter)

mongoose.connect(process.env.mongoDB)
.then(() => app.listen(PORT, () => console.log(`App Listen in Port: ${PORT}`)))
.catch((err) => console.log(err))