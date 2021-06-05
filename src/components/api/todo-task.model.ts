export interface TodoTask {
    id: number;
    description: string;
    isCompleted: boolean;
}

export const createNewTask = {
    id: 0,
    description: '',
    isCompleted: false
}