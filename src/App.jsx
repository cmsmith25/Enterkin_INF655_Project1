import React from 'react';
import TaskArray from './TaskArray';
import UserInfo from './UserInfo';
import Greeting from './Greeting';

import './App.css'

const App = () => {

  return (
    <div>
      <Greeting />
      <br />
      <UserInfo />
      <br />
      <TaskArray />
    </div>
  );
}


export default App;