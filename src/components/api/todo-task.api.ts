import { apiUrl } from '../../common/constants';
import { TodoTask } from './todo-task.model';

export const getAllTodoTasks = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();

    return data;
}

export const addTask = async (newTask: TodoTask) => {
    const response = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(newTask),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await response.json();
}