import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './App.css';
import Trianglenav from './routes/TriangleNav';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Outlet />      
    </div>
  );
}

export default App;
