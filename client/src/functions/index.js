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

export const updateTodos = async (id, todo) => {
    try {
        const { data } = await api.updateTodos(id, todo);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const deleteTodos = async (id, todo) => {
    try {
        await api.deleteTodos(id)
    } catch (error) {
        console.log(error);
    }
}