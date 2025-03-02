import React, { useState } from 'react';

const TaskForm = () => {
    const [taskName, setTaskName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(taskName);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Task Name: 
                <input
                    type="text"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default TaskForm;