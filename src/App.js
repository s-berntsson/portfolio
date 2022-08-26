import React from 'react';
import { Outlet, NavLink } from "react-router-dom";
import './App.css';
import ThemeSelection from './features/themes/ThemeSelection';

function App() {
  return (
    <div className="App">  
      <nav className="navbar">
        <NavLink to="/" className="home-container">                  {/* use isActive thingy to hide when home */}
          <h4 className="home-text" >HOME</h4>
          <img className="triangle" src="" alt="triangle" />   {/* probably replace this whole thang with component */}
        </NavLink>
        <ThemeSelection />
      </nav>
      <Outlet className="outlet" />      
    </div>
  );
}

export default App;
