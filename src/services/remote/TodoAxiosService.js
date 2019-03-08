import {AxiosService} from "./base/AxiosService";

export const TodoAxiosService = {
    fetchAll(query = {}) {
        const page = query.page || 1;
        const page_size = query.page_size || 5;
        return AxiosService.fetchPage('todos', page, page_size);
    },

    fetchById(id) {
        return AxiosService.get(`/todos/${id}`);
    },
    create(slug, payload) {
        return AxiosService.post(`todos/${slug}/comments`, {
            comment: {body: payload}
        });
    },
    update(todo) {
        return AxiosService.put(`todos/${todo.id}`, todo);
    },

    delete(id) {
        return AxiosService.delete(`todos/${id}`);
    },
    deleteAll() {
        return AxiosService.delete(`todos`);
    }
};