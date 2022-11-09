import request from "../utils/request";

const TodoNewsService = {
    getTodoData<T>() {
        return request<T>('GET', 'todos');
    },
}

export default TodoNewsService;