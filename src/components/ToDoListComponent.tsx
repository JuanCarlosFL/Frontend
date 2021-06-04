import React from 'react';
import { TodoTask } from './api/todo-task.model';

interface Props {
    todotask: TodoTask[];
}

export const ToDoListComponent: React.FC<Props> = props => {

    const { todotask } = props;
    const listOfPendingTasks = todotask.filter( task => !task.isCompleted);
    const listOfCompletedTasks = todotask.filter( task => task.isCompleted);

    return (
        <div style={{display: "flex"}}>
            <div style={{width: "50vw"}}>
                <p>List of pending tasks</p>
                <ul style={{listStyle:"none"}}>
                    {listOfPendingTasks.map( task => <li key={task.id}>{ task.description }</li>)}
                </ul>  
            </div>
            <div style={{width: "50vw"}}>
                <p>List of completed tasks</p>
                <ul style={{listStyle:"none"}}>
                    {listOfCompletedTasks.map( task => <li key={task.id}>{ task.description }</li>)}    
                </ul>
            </div>
        </div>
    )
}