import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Competents/Title'
import Scoreboard from './Competents/Scoreboard';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <Scoreboard/>
        </main>
      </header>
    </div>
  );
}

export default App;
