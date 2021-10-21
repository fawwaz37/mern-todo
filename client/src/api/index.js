import axios from "axios";

const url = 'http://localhost:5050/todo'

export const getTodos = () => axios.get(url);

export const postTodos = newTodo => axios.post(url, newTodo);