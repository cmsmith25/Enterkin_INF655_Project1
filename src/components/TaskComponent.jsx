import React, { useState, useContext } from 'react';
import TaskForm from './TaskForm';
import TaskContext from './context/TaskContext';


//Creates component to search, sort, edit and delete
const TaskComponent = () => {
    const {
        taskList,
        addTask,
        updateTask,
        deleteTask,
        checkTask,
    } = useContext(TaskContext);

    const [searchTerm, setSearchTerm] = useState('');
    const [sortAsc, setSortAsc] = useState(true);
    const [editingTask, setEditingTask] = useState(null);


    //Will handle input
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    //Sorting order and applies the sort
    const termSort = () => {
        setSortAsc(!sortAsc);
    };

    //Filters and sorts tasks
    const taskFilter = taskList
        .filter(task => task.name.toLowerCase().includes(searchTerm)) //Filters tasks
        .sort((a, b) => sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)); //Sorts tasks


    const handleSubmit = (values) => {
        if (editingTask) {
            updateTask(editingTask.id, values); //If editing update task
            setEditingTask(null); //Reset editing task state
        } else {
            addTask(values); //Add a new task if not editing
        }
    };

    const handleEdit = (task) => {
        setEditingTask(task);
    };

    return (
        <div>
            {editingTask && (
            <div className="task-form-card">
                <h2>{editingTask ? 'Edit Task' : 'Add New Task'}</h2>
                <TaskForm
                    initialValues={{
                        name: editingTask.name,
                        description: editingTask.description
                    }}
                    handleSubmit={handleSubmit}
                    resetForm={() => setEditingTask(null)}
                    />
            </div>
            )}

            <div className="search-wrapper">
                <input
                    type="text"
                    placeholder="Search for tasks..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button onClick={termSort}>Sort by Name ({sortAsc ? "A to Z" : "Z to A"})</button>
            </div>
            
            <div className="tasks-container">
                {taskFilter.map((task) => (
                    <div key={task.id} className="task-card">
                        <h3 style={{ textDecoration: task.checked ? 'line-through' : 'none '}}>
                            {task.name}</h3>
                        <p>{task.description}</p>
                        <label>
                            <input
                                type="checkbox"
                                checked={task.checked}
                                onChange={() => checkTask(task.id)}   
                                />Task Completed
                        </label>

                        <button onClick={() => {
                        //Gives confirm message of delete
                        if (window.confirm("Are you sure you want to delete the task?")) {
                            deleteTask(task.id);
                            }
                        }}
                            >Delete Task</button>
                        <button onClick={() => handleEdit(task)}>Edit Task</button>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default TaskComponent;