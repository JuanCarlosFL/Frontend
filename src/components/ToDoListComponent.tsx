import React from 'react';
import { TodoTask } from './api/todo-task.model';
import { TaskRowComponent } from './TaskRowComponent';

interface Props {
    todotasks: TodoTask[];
    handleChangeStatusTask: (e: EventTarget & HTMLInputElement) => void;
}

export const ToDoListComponent: React.FC<Props> = props => {

    const { todotasks, handleChangeStatusTask } = props;
    const listOfPendingTasks: TodoTask[] = todotasks.filter( task => !task.isCompleted);
    const listOfCompletedTasks: TodoTask[] = todotasks.filter( task => task.isCompleted);
    
    return (
        <div style={{display: "flex"}}>
            <div style={{width: "50vw"}}>
                <h2>List of pending tasks</h2>
                <ul style={{listStyle:"none"}}>
                    {listOfPendingTasks.map( task =><TaskRowComponent task={task} handleChangeStatusTask={handleChangeStatusTask}/> )}
                </ul>  
            </div>
            <div style={{width: "50vw"}}>
                <h2>List of completed tasks</h2>
                <ul style={{listStyle:"none"}}>
                    {listOfCompletedTasks.map( task => <TaskRowComponent task={task} handleChangeStatusTask={handleChangeStatusTask}/> )}    
                </ul>
            </div>
        </div>
    )
}