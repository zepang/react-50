import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink to='/expanding-cards'>expanding-cards</NavLink>
      </header>
    </div>
  );
}

export default App;
