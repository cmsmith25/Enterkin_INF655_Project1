import React, { useState } from 'react';
import TaskForm from './TaskForm';


//Creates component to search, sort, edit and delete
const TaskComponent = ({ tasks, addTask, updateTask, deleteTask }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortAsc, setSortAsc] = useState(true);
    const [checkedTasks, setCheckedTasks] = useState({});
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
    const taskFilter = tasks
        .filter(task => task.name.toLowerCase().includes(searchTerm)) //Filters tasks
        .sort((a, b) => sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)); //Sorts tasks


    const handleSubmit = (values, { resetForm }) => {
        if (editingTask) {
            updateTask(editingTask.id, values); //If editing update task
            setEditingTask(null); //Reset editing task state
        } else {
            addTask(values); //Add a new task if not editing
        }
        resetForm();
    ;}

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
                        name: editingTask ? editingTask.name : '',
                        description: editingTask ? editingTask.description : '',
                    }}
                    handleSubmit={handleSubmit}
                    editingTask={editingTask}
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
                        <h3 style={{ textDecoration: checkedTasks[task.id] ? 'line-through' : 'none '}}>
                            {task.name}</h3>
                        <p>{task.description}</p>
                        <label>
                            <input
                                type="checkbox"
                                checked={checkedTasks[task.id] || false} //Will check if task is checked
                                onChange={() => setCheckedTasks((prev) => ({
                                    ...prev, [task.id]: !prev[task.id],
                                }))
                            } //Toggle checkbox state for task    
                                />{''} Task Completed
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