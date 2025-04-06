import React, { useState } from 'react';
import UserInfo from '../components/UserInfo';
import Greeting from '../components/Greeting';
import TaskComponent from '../components/TaskComponent';
import TaskForm from '../components/TaskForm';


const App = () => {
  //State to store tasks
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Clean the kitchen', description: 'Clean the dishes', completed: false },
    { id: 2, name: 'Feed the pets', description: 'Give food and meds to pets', completed: false },
    { id: 3, name: 'Wash the laundry', description: 'Clean and fold clothes', completed: false },
    { id: 4, name: 'Go grocery shopping', description: 'Buy groceries', completed: false },
    { id: 5, name: 'Water the plants', description: 'Water indoor plants', completed: false },
  ]);

  const [editingTask, setEditingTask] = useState(null);

  //Function to add new task
  const addTask = (task) => {
    const newTask = { ...task, id: Date.now(), completed: false };
    //Spread operator appends new task to existing list
    setTasks(previousTasks => [...previousTasks, newTask]);
  };

  //Function to update task
  const updateTask = (id, updatedTask) => {
    setTasks(previousTasks =>
      previousTasks.map(task =>
        task.id === id ? { ...task, ...updatedTask } : task
      )
    );
    setEditingTask(null);
  };

  //Function to delete task
  const deleteTask = (id) => {
    //Confirmation window
    if (window.confirm("Are you sure you want to delete task?")) {
      setTasks(previousTasks => previousTasks.filter(task => task.id !== id));
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  //Returns all components 
  return (
    <div className="app-container">
        <Greeting username="Mickey" />
      <br />
      <div className="card">
        <UserInfo />
      </div>
      <br />
      <div className="card">
        <h2>Add New Task</h2>
        <TaskForm addTask={addTask} />
      </div>
      <br />
      <div className="card">
        <TaskComponent tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
    </div>
    
  );
};





export default App;