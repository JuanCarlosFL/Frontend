import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ToDoComponent } from './components/ToDoComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <ToDoComponent />
    </div>
  );
}

export default App;
