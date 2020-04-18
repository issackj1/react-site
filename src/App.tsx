import React from 'react';
import logo from './logo.svg';
import './App.css';
import NarBar from "./components/NavBar";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <NarBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Issack John
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning React
        </a>
      </header>
      <Content/>
    </div>
  );
}

export default App;
