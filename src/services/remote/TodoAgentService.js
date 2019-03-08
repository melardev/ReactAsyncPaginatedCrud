import {SuperAgentService} from "./base/SuperAgentService";


export const TodoAgentService = {
    fetchAll: (query) => SuperAgentService.fetchPage('/todos', query.page, query.page_size),
    fetchCompleted: (page, pageSize) => SuperAgentService.fetchPage('/todos/completed', page, pageSize),
    fetchPending: (page, pageSize) => SuperAgentService.fetchPage('/todos/pending', page, pageSize),
    fetchById: id => SuperAgentService.get(`/todos/${id}`),
    createTodo: todoObj => SuperAgentService.post('/todos', todoObj),
    updateTodo: (id, todoObj) => SuperAgentService.put(`/todos/${id}`, todoObj),
    deleteTodo: (id) => SuperAgentService.del(`/todos/${id}`),
    deleteAll: () => SuperAgentService.del('/todos'),
};