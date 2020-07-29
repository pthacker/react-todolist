import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewTaskEnter from './NewTaskEnter';
import TaskList from './TaskList';
import TaskProvider from './TaskProvider';


function App() {
  return (
    <div className="App">
      <TaskProvider>
      <NewTaskEnter/>
      <TaskList/>
      </TaskProvider>
    </div>
  );
}

export default App;
