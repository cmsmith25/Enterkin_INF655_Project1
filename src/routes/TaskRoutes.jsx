import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import TaskComponent from '../components/TaskComponent';
import TaskContext from '../components/context/TaskContext';

export default function TaskRoutes() {
    const {
        taskList,
        addTask,
        updateTask,
        deleteTask,
        checkTask,
} = useContext(TaskContext);

return (
    <Routes>
        <Route
            path="/"
            element={
                <TaskComponent
                    tasks={taskList}
                    addTask={addTask}
                    updateTask={updateTask}
                    deleteTask={deleteTask}
                    checkTask={checkTask}
                />
            }
            />
    </Routes>
);
}