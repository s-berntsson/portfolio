import React from 'react';
import { Outlet, NavLink } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">   {/* avoid div? */}
      <nav>
        <NavLink to="/">                  {/* use isActive thingy to hide when home */}
          <img src="" alt="triangle" />   {/* probably replace this whole thang with component */}
        </NavLink>
        <img src="" alt="star" />  {/* probably replace with component */}
      </nav>
      <Outlet />      
    </div>
  );
}

export default App;
