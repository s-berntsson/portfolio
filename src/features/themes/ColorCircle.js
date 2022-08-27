import React from "react";
import { useDispatch } from 'react-redux';
import { changeTheme } from "./themesSlice";
import { useCurrentThemeData, useGlowEffect, useSpecificThemeData } from "./themeHooks"

const ColorCircle = ({ color, className }) => {
  const { currentTheme } = useCurrentThemeData()
  const {light, dark} = useSpecificThemeData(color)
  const glowEffect = useGlowEffect("glow")
  const dispatch = useDispatch()


  const isCurrentTheme = color === currentTheme
  const stroke = isCurrentTheme ? light : dark
  const glowStyle = isCurrentTheme ? glowEffect : null


  const handleClick = () => {
    dispatch(changeTheme(color))
  }

  return (
    <svg onClick={handleClick} className={className} xmlns="http://www.w3.org/2000/svg" fill="none" width="100" height="100" viewBox="-9 -9 110 110">
      <circle cx="46" cy="46" r="44.5" stroke={stroke} style={glowStyle} strokeWidth="4" />
    </svg>
  )
}

export default ColorCircle