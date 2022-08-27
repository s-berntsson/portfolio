import React, { useState } from 'react';
import { Outlet, NavLink, matchPath, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import './App.css';
import ThemeSelection from './features/themes/ThemeSelection';
import { useCurrentThemeData, useGlowEffect } from './features/themes/themeHooks';

function App() {

const {light, dark} = useCurrentThemeData()
const glowEffect = useGlowEffect("glow")

// Handle hover effect (cant import HoverLink bc need to display triangle)
const [hover, setHover] = useState(false)

const handleMouseEnter = () => { setHover(true) }

const handleMouseLeave = () => { setHover(false) }

//hide homelink when home ?????


// gather linkstyle in obj
const linkStyle = {
    color: hover ? light : dark,
    filter: hover ? glowEffect : null,
    // visibility: isHome ? "hidden" : "visible"
}

const triangleStyle = { display: hover ? "inline" : "none" }



  return (
    <div className="App">
      <nav className="navbar">
        <NavLink to="/" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="home-container" style={linkStyle} > 
          <h4 className="home-text" >HOME</h4>
          <svg className="home-triangle" style={triangleStyle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 244 211">
            <path stroke={light} strokeDasharray="12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M122 2L242 209.407H2L122 2Z" />
          </svg>
        </NavLink>
        <ThemeSelection />
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
