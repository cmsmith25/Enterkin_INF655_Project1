import React, { useState } from 'react';


//Creates component to search, sort and delete
const TaskComponent = ({ tasks, deleteTask }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortAsc, setSortAsc] = useState(true);

    //Will handle input
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    //Sorting order and applies the sort
    const termSort = () => {
        setSortAsc(!sortAsc);
    };

    //Filters and sorts tasks
    const taskFilter = tasks
    .filter(task => task.name.toLowerCase().includes(searchTerm)) //Filters tasks
    .sort((a, b) => sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)); //Sorts tasks


    return (
        <div>
            <input
                type="text"
                placeholder="Search for tasks..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <button onClick={termSort}>Sort by Name ({sortAsc ? "A to Z" : "Z to A"})</button>
            
            <ul>
                {taskFilter.map(task => (
                    <li key={task.id}>{task.name} - {task.description}
                    <button onClick={() => {
                        //Gives confirm message of delete
                        if (window.confirm("Are you sure you want to delete the task?")){
                            deleteTask(task.id);
                        }
                    }}>Delete Task</button></li>
                ))}
            </ul>
        </div>
    );
};


export default TaskComponent;