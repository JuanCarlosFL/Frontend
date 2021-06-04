import { apiUrl } from '../../common/constants';

export const getAllTodoTasks = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

    return data;
}