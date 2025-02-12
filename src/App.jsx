import React from 'react';
import TaskArray from './TaskArray';
import UserInfo from './UserInfo';


import './App.css'

const App = () => {
  const currentDate = new Date().toLocaleDateString();
  

  const pStyle = {
    color: 'purple',
    fontSize: '16px',
  };

  return (
    <div>
      <h1>Hello, Welcome to React!</h1>
      <p style={pStyle}>Today's date is: {currentDate}</p>
      <br />
      <UserInfo />
      <br />
      <TaskArray />
    </div>
  );
};


export default App;