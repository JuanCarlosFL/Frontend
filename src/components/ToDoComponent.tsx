import React, { useEffect, useState } from 'react';
import { TodoTask } from './api/todo-task.model';
import { getAllTodoTasks } from './api/todo-task.api';
import { ToDoListComponent } from './ToDoListComponent';

export const ToDoComponent = () => {

    const [todoList, setTodoList] = useState<TodoTask[]>([]);

    const handleLoadTaskList = async () => {
        const todoTaskList = await getAllTodoTasks();
        setTodoList(todoTaskList);
    };
    useEffect(() => {

        handleLoadTaskList();
    },[])

    return (
        <>
            <h1>List of Tasks</h1>
            <ToDoListComponent todotask={todoList} />
        </>
    )
}