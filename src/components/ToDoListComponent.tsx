import React from 'react';
import { TodoTask } from './api/todo-task.model';

interface Props {
    todotask: TodoTask[];
    handleChangeStatusTask: (e: EventTarget & HTMLInputElement) => void;
}

export const ToDoListComponent: React.FC<Props> = props => {

    const { todotask, handleChangeStatusTask } = props;
    const listOfPendingTasks = todotask.filter( task => !task.isCompleted);
    const listOfCompletedTasks = todotask.filter( task => task.isCompleted);

    return (
        <div style={{display: "flex"}}>
            <div style={{width: "50vw"}}>
                <h2>List of pending tasks</h2>
                <ul style={{listStyle:"none"}}>
                    {listOfPendingTasks.map( task => <li key={task.id}>{ task.description } <input type="checkbox" value={task.id} onChange={e => handleChangeStatusTask(e.target)}></input></li>)}
                </ul>  
            </div>
            <div style={{width: "50vw"}}>
                <h2>List of completed tasks</h2>
                <ul style={{listStyle:"none"}}>
                    {listOfCompletedTasks.map( task => <li key={task.id}>{ task.description } <input type="checkbox" value={task.id} onChange={e => handleChangeStatusTask(e.target)}></input></li>)}    
                </ul>
            </div>
        </div>
    )
}