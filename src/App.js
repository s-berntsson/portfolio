import React, { useState } from 'react';
import { Outlet, NavLink, matchPath } from "react-router-dom";
import { useSelector } from "react-redux";
import './App.css';
import ThemeSelection from './features/themes/ThemeSelection';
import { selectCurrentThemeData } from './features/themes/themesSlice';
import HoverRouterLink from './features/themes/HoverLink';

function App() {

const {glow, light, dark} = useSelector(selectCurrentThemeData)

// Handle hover effect
const [hover, setHover] = useState(false)

const handleMouseEnter = () => { setHover(true) }

const handleMouseLeave = () => { setHover(false) }

const linkStyle = {
    color: hover ? light : dark,
    filter: hover ? `drop-shadow(0 0 .2rem ${glow})` : null
}

const triangleStyle = { display: hover ? "inline" : "none" }


  return (
    <div className="App">
      <nav className="navbar">
        <NavLink to="/" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="home-container" style={linkStyle} >                  {/* use isActive thingy to hide when home */}
          <h4 className="home-text" >HOME</h4>
          <svg className="home-triangle" style={triangleStyle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 244 211">
            <path stroke={light} stroke-dasharray="12 12" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M122 2L242 209.407H2L122 2Z" />
          </svg>
        </NavLink>
        <ThemeSelection />
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
