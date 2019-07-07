import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
     <SideBar />
    </div>
  );
}

export default App;
