import React, { useEffect, useState } from 'react';
import { TodoTask, createNewTask } from './api/todo-task.model';
import { getAllTodoTasks, addTask, changeStatusTask } from './api/todo-task.api';
import { ToDoListComponent } from './ToDoListComponent';

export const ToDoComponent = () => {

    const [todoList, setTodoList] = useState<TodoTask[]>([]);
    const [newTask, setNewTask] = useState<TodoTask>(createNewTask);

    const handleLoadTaskList = async () => {
        const todoTaskList = await getAllTodoTasks();
        setTodoList(todoTaskList);
    };
    useEffect(() => {

        handleLoadTaskList();
    },[]);

    const handleAddTask = async () => {
        let task = await addTask(newTask);
        setNewTask(createNewTask);
        setTodoList([...todoList, task]);
    }

    const handleChangeStatusTask = async (e: EventTarget & HTMLInputElement) => {
        const updateTask = await changeStatusTask(e.checked, parseInt(e.value));
        const todoListUpdated = todoList.map( task => task = task.id === parseInt(e.value) ? updateTask : task);
        setTodoList(todoListUpdated);
    }

    return (
        <>
            <h1>List of Tasks</h1>
            <input value={newTask.description} onChange={e => setNewTask({
                ...newTask,
                description: e.target.value
            })}/>
            <button onClick={handleAddTask}>Add task</button>
            <ToDoListComponent todotasks={todoList} handleChangeStatusTask={handleChangeStatusTask}/>
        </>
    )
}