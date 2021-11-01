import axios from "axios";

const url = 'http://localhost:5050/todo'

export const getTodos = () => axios.get(url);

export const postTodos = newTodo => axios.post(url, newTodo);

export const updateTodos = (id, updateTodo) => axios.patch(`${url}/${id}`, updateTodo);

export const deleteTodos = (id) => axios.delete(`${url}/${id}`)