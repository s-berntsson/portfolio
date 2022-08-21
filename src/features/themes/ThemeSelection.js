import React from "react";
import { useSelector } from "react-redux";

import { selectCurrentTheme, selectAllThemeData, selectThemeKeys } from "./themesSlice";

import styles from "./ThemeSelection.module.css";

import ColorCircle from "./ColorCircle";



const ThemeSelection = () => {

    const currentTheme = useSelector(selectCurrentTheme)
    const themes = useSelector(selectAllThemeData)
    const themeKeys = useSelector(selectThemeKeys)

    const renderedCircles = themeKeys.map(key => {
        return(<ColorCircle key={key}color={key} className={styles.colorCircle} themeData={themes[key]} currentTheme={currentTheme} />)
        })

    return (
        <div>
            {renderedCircles}
        </div>
    )
}

export default ThemeSelection