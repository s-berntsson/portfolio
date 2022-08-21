import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from "./themesSlice";

const ColorCircle = ({color, className, themeData, currentTheme}) => {

  const dispatch = useDispatch()

/*
  //local state
  const decideStroke = () => {
    if (currentTheme.toString() !== color){
      return themeData.dark
    }
    return themeData.light
  }

  const [stroke, setStroke] = useState(themeData.dark)

  */


  //handle click
  const handleClick = () => {
    dispatch(changeTheme(color))
  } 


  return (
    <svg onClick={handleClick} className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 92 92">
      <circle cx="46" cy="46" r="44.5" stroke={themeData.dark} strokeWidth="3" />
    </svg>
  )
}

export default ColorCircle