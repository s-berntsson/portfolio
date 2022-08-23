import React from "react";
import { useDispatch } from 'react-redux';
import { changeTheme } from "./themesSlice";

const ColorCircle = ({color, className, themeData, currentTheme}) => {
  const dispatch = useDispatch()
  let stroke = themeData.dark
  let glow = "none"

  const decideStyling = () => {
    if (currentTheme === color) {
      stroke = themeData.light
      glow = `drop-shadow(0 0 0.2rem ${themeData.glow})`  //phrase same as in trianglenav?
    }
  }

  decideStyling()

  const handleClick = () => {
    dispatch(changeTheme(color))
  } 

  return (
    <svg onClick={handleClick} className={className} xmlns="http://www.w3.org/2000/svg" fill="none" width="100" height="100" viewBox="-9 -9 110 110">
      <circle cx="46" cy="46" r="44.5" stroke={stroke} style={{filter: glow}} strokeWidth="4" />
    </svg>
  )
}

export default ColorCircle