import React from 'react';
import TaskArray from './TaskArray';
import UserInfo from './UserInfo';
import Greeting from './Greeting';
import Counter from './Counter';
import TaskForm from './TaskForm';

import './App.css'

const App = () => {
  const handleAlert = () => {
    alert('Button was clicked!');
  };
  const tasks = [
    { id: 1, name: 'Clean the kitchen' },
    { id: 2, name: 'Feed the pets' },
    { id: 3, name: 'Wash the laundry' },
    { id: 4, name: 'Go grocery shopping' },
    { id: 5, name: 'Water the plants'}
  ];

  return (
    <div>
      <Greeting username="Mickey" />
      <Greeting username="Minnie" />
      <br />
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
      <br />
      <UserInfo handleClick={handleAlert} />
      <br />
      <TaskArray />
      <br />
      <Counter />
      <br />
      <TaskForm />
    </div>
  );
};




export default App;