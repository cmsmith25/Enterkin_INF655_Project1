import React, { useContext } from 'react';
import UserInfo from '../components/UserInfo';
import Greeting from '../components/Greeting';
import TaskComponent from '../components/TaskComponent';
import TaskForm from '../components/TaskForm';
import { UserAuth } from '../components/context/AuthContext';
import TaskContext  from '../components/context/TaskContext';


const HomePage = () => {
  const { user } = UserAuth();
  const { taskList } = useContext(TaskContext);

  return (
    <div className="app-container">
      <Greeting username={user?.displayName || user?.email || "User"} />
      <br />
      <div className="card">
        <h2>Add New Task</h2>
        <TaskForm />
      </div>
      <br />
      <div className="card">
        <TaskComponent taskList={taskList} />
      </div>
    </div>
  );
};

export default HomePage;