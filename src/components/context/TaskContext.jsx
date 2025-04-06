import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TaskContext = createContext();

const TaskData =[];

export const TaskProvider = ({ children }) => {
    const [taskList, setTaskList] = useState(TaskData);
    const [taskEdit, setTaskEdit] = useState({
        task: {},
        edit: false,
    });

    //Add task
    const addTask = (newTask) => {
        newTask.id = uuidv4();
        newTask.checked = false;
        setTaskList([newTask, ...taskList]);
    };


    //Edit task
    const editTask = (task) => {
        setTaskEdit({ task, edit: true });
    };

    //Update task
    const updateTask = (id, updTask) => {
        setTaskList(
            taskList.map((task) => (task.id === id ? { ...task, ...updTask } : task))
        );
    };

    //Delete task
    const deleteTask =(id) => {
       setTaskList(taskList.filter((task) => task.id !== id)); 
    };

    const checkTask = (id) => {
        setTaskList(
            taskList.map((task) =>
            task.id === id ? { ...task, checked: !task.checked } : task)
        );
    };

    return (
        <TaskContext.Provider 
            value={{
                taskList,
                deleteTask,
                checkTask,
                addTask,
                editTask,
                updateTask,
                taskEdit,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};

export default TaskContext;