import { apiUrl } from '../../common/constants';
import { TodoTask } from './todo-task.model';

const getTaskById = async (id: number) => {
    const response = await fetch(`${apiUrl}/${id}`);

    return response.json();
}

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

export const changeStatusTask = async (checked: boolean, id: number) => {
    const task: TodoTask = await getTaskById(id);
    task.isCompleted = task.isCompleted ? !checked : checked;
    const response = await fetch(apiUrl, {
        method: 'PUT',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response.json();
}