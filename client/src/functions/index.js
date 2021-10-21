import * as api from "../api"

export const getTodos = async () => {
    try {
        const { data } = await api.getTodos();
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const postTodos = async (todo) => {
    try {
        const { data } = await api.postTodos(todo);
        return data;
    } catch (error) {
        console.log(error);
    }
}