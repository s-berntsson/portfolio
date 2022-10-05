import React, { useState } from 'react';
import { Outlet, NavLink, matchPath, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import './App.css';
import ThemeSelection from './features/themes/ThemeSelection';
import { useCurrentThemeData, useGlowEffect } from './features/themes/themeHooks';

function App() {

const {light, dark, glow} = useCurrentThemeData()
const glowEffect = useGlowEffect(glow)

// Handle hover effect (cant import HoverLink bc need to display triangle)
const [hover, setHover] = useState(false)

const handleMouseEnter = () => { setHover(true) }

const handleMouseLeave = () => { setHover(false) }

const linkStyle = glowEffect

    linkStyle.color = hover ? light : dark
    linkStyle.filter = hover ? linkStyle.filter : null

const triangleStyle = { display: hover ? "inline" : "none" }



  return (
    <div className="App">
      <nav className="navbar">
        <NavLink to="/" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="home-container" style={linkStyle} > 
          <h4 className="home-text" >HOME</h4>
          <svg className="home-triangle" style={triangleStyle} xmlns="http://www.w3.org/2000/svg" fill="none"  width="100" height="100" viewBox="0 0 244 211" >
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
