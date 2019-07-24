import React from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom'
import './Home.css';
import TopNav from '../../Components/TopNav/TopNav';

function App() {
  return (
    <div className="App">
      <TopNav
      />
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            float: 'left',
            justifyContent: 'space-between',
            width: '50%',
          }}
        >
          <Link
            to="/eyes"
          >
            <p>
              Eyes
          </p>
          </Link>
          <p>
            ..
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
