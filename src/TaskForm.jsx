import React, { useState } from "react";


//Builds a task form 
const TaskForm = ({ addTask }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    //Will handle form submission
    const handleSubmission = (event) => {
        event.preventDefault();
        

        //Ensures form entry is not blank
        if (!taskName.trim() || !description.trim()) {
            alert("Task name and description fields cannot be empty! Please enter a task name and description!");
            return;
        }

        //Creates a new task
        const newTask = { name: taskName, description };

        addTask(newTask); //Adds the task to App.jsx

    };

        return (
            <form onSubmit={handleSubmission}>
                <input
                type="text"
                placeholder="Enter a task"
                value={taskName}
                onChange={(event) => setTaskName(event.target.value)}
                />
                <input
                type="text"
                placeholder="Enter a description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <button type="submit">Add Task</button>
            
            </form>
        );
    };

export default TaskForm;

