import React from 'react';
import { TodoTask } from './api/todo-task.model';

interface Props {
    task: TodoTask;
    handleChangeStatusTask: (e: EventTarget & HTMLInputElement) => void;
}

export const TaskRowComponent: React.FC<Props> = props => {

    const { task, handleChangeStatusTask } = props;

    return (
        <li key={task.id}>
            { task.description } <input type="checkbox" value={task.id} onChange={e => handleChangeStatusTask(e.target)}></input>
        </li>
    )
}