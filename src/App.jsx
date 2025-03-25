import React, { useState } from 'react';
import UserInfo from './UserInfo';
import Greeting from './Greeting';
import Counter from './Counter';//Not being used to midterm
import TaskComponent from './TaskComponent';
import TaskForm from './TaskForm';

import './App.css'

const App = () => {
  const handleAlert = () => {
    alert('Button was clicked!');
  };
  //State to store tasks
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Clean the kitchen' },
    { id: 2, name: 'Feed the pets' },
    { id: 3, name: 'Wash the laundry' },
    { id: 4, name: 'Go grocery shopping' },
    { id: 5, name: 'Water the plants'}
  ]);

  //Function to add new task
  const addTask = (task) => {
    //Spread operator appends new task to existing list
    setTasks(previousTasks => [...previousTasks, task]);
  };

  //Function to delete task
  const deleteTask = (id) => {
    //Confirmation window
    if (window.confirm("Are you sure you want to delete task?")) {
      setTasks(previousTasks => previousTasks.filter(task => task.id !== id));
    }
  };

  //Returns all components 
  return (
    <div>
      <Greeting username="Mickey" />
      <br />
      <UserInfo />
      <br />
      <TaskForm addTask={addTask} />
      <br />
      <TaskComponent tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};




export default App;