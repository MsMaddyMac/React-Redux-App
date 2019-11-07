import React from 'react';
import './App.css';

// import components
import { ElephantList } from './components/ElephantList';

function App() {
  return (
    <div className="App">
      <h1>🐘Meet The Elephants!🐘</h1>
      <ElephantList />
    </div>
  );
}

export default App;
